<template>
  <div class="ma-0">
    <nav
      class="d-flex flex-wrap justify-space-between align-end elevation-1 px-3 py-1"
    >
      <v-img
        :src="require('@/assets/img/logo2.png')"
        max-width="200"
        min-width="200"
      />
      <h1>Conversor de Catálogos PDF</h1>
    </nav>

    <v-sheet class="mt-5 pa-2">
      <v-row>
        <v-col cols="6">
          <v-file-input
            v-model="file"
            accept="application/pdf"
            label="Clique para selecionar o catálogo PDF"
            variant="outlined"
            prepend-icon="mdi-paperclip"
            @change="onFileChange"
          />

          <div
            v-if="pdfSrc !== null"
            class="pa-2"
          >
            <h2>{{ file?.name }}</h2>
            <pdf class="border-md rounded" :src="pdfSrc" />
            <small>*Amostra</small>
          </div>

          <v-btn
            v-if="pdfSrc !== null"
            class="mt-2"
            color="primary"
            text="Processar PDF"
            @click="process"
          />
        </v-col>
      </v-row>
    </v-sheet>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import pdf from 'vue3-pdf';

const file = ref<File | null>(null);
const pdfSrc = ref<string | null>(null);

const onFileChange = (event: Event) => {
  const target = event.target as HTMLInputElement;

  if (target.files && target.files.length > 0) {
    file.value = target.files[0];
    pdfSrc.value = URL.createObjectURL(file.value);
  } else {
    file.value = null;
    pdfSrc.value = null;
  }
};

const process = async () => {
  const baseURL = `${window.location.href}api/process-pdf`;

  const formData = new FormData();
  if (file.value) {
    formData.append('file', file.value);
  } else {
    console.log('No file selected');
    return
  }

  const params = {
    archiveName: file.value?.name,
    base64: formData,
  }

  try {
    const responseFetch = await fetch(baseURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(params),
    });

    const response = await responseFetch.json();
    console.log(response);
  } catch (err) {
    console.log(err);
  }
}
</script>

<style>
  /* Estilos opcionais */
</style>

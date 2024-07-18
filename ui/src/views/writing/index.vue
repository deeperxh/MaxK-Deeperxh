 // 如果你使用的是 'snow' 主题
<template>
  <div id="editor">
    <RichTextEditor />
  </div>
</template>

<script  lang="ts">
import RichTextEditor from '@/views/writing/component/RichTextEditor.vue';
import '@vueup/vue-quill/dist/vue-quill.snow.css';
export default {
  name: 'TextEditor',
  components: {
    RichTextEditor
  }
};
</script>

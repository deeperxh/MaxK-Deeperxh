<template>
  <div>
    <quill-editor
      v-model="content"
      ref="myQuillEditor"
      :options="editorOptions"
      @text-change="onEditorChange"
    />
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue';
import { QuillEditor } from '@vueup/vue-quill';

export default defineComponent({
  components: {
    QuillEditor
  },
  setup() {
    const content = ref('');
    const editorOptions = ref({
      // 配置你的编辑器选项，例如工具栏
      modules: {
        toolbar: [
          [{ header: [1, 2, false] }],
          ['bold', 'italic', 'underline'],
          ['image', 'code-block']
        ]
      },
      placeholder: 'Compose an epic...',
      theme: 'snow'  // 或者 'bubble'
    });

    const onEditorChange = (content, delta, source, editor) => {
      console.log('Editor content changed:', content);
    };

    return {
      content,
      editorOptions,
      onEditorChange
    };
  }
});
</script>

<style>
/* 添加一些样式来调整编辑器的外观 */
.ql-editor {
  min-height: 200px;
}
</style>

import Layout from '@/layout/layout-template/DetailLayout.vue'
const datasetRouter = {
  path: '/writing',
  name: 'writing',
  meta: { title: '写作', permission: 'APPLICATION:READ' },
  component: () => import('@/layout/layout-template/AppLayout.vue'),
  redirect: '/writing',
  children: [
    {
      path: '/writing',
      name: 'writing',
      component: () => {
        return import('@/views/writing/index.vue');
      }
    }
  ]
}

export default datasetRouter

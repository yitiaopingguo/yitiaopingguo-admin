import ExampleLayout from '@/layout/example'

export default {
    path: '/example',
    redirect: '/example/test',
    component: ExampleLayout,
    children: [
        {
            path: 'test',
            component: () =>
                import(/* webpackChunkName: 'Test' */ '@/views/example/Test.vue')
        },
    ]
}

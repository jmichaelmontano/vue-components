Vue.component('plan-component', {
    template: '#plan-template',
    props: {
        name: {
            type: String,
            default: 'Alex',
            required: true
        },
        proce: Number
    }
})

new Vue({
    el: '#app',
    data: {
        plans: ['The Single', 'The Curious', 'The Addict']
    }
})
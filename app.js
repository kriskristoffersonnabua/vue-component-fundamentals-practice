Vue.component('click-counter', {
    template: '#click-counter',
    data() {
        return {
            count: 0
        };
    }
});

new Vue({
    el: '#app'
});

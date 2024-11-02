<template>
    invoices
</template>

<script>
import { onBeforeRouteLeave } from 'vue-router';
export default{
    setup(){
        onBeforeRouteLeave((to,from)=>{
            const answer = window.confirm('are you sure you want to leave')
            if(!answer)return false
        })
        
    }

}</script>
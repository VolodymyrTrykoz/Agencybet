<template>
    <div>
        <div class="heading"
             ref="title"
             v-bind:style="{
                 transform: `translateX(${elOffsetTop/2}px`
            }"
        >
            {{title}}
        </div>
    </div>
</template>

<script src="./script.js"></script>

<style lang="sass" src="./style.sass" scoped></style>
<template>
    <section class="clients">
        <div class="container">
            <div class="clients__wrapper">
                <span class="heading heading6">
                    <span class="heading__content" ref="clients">{{ language[defineLanguage].clients }}</span>
                </span>
                <Client
                  v-for="client in clientItems"
                  v-bind:client="client"
                  v-bind:handleRef="handleRef"
                  v-bind:key="client.id"
                  ref="clientcomp">
                </Client>
            </div>
        </div>
    </section>
</template>

<script src="./script.js"></script>

<style lang="sass" src="./style.sass" scoped></style>
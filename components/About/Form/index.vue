<template>
    <div class="container">
        <div class="form">
            <form @submit.prevent="submit">
                <h4 class="heading heading4">{{ language[defineLanguage].getInTouch }}</h4>
                <div class="formGroup" v-bind:class="{ invalid: !isNameValid, valid: isNameCorrect}">
                    <input
                            v-model="name"
                            @input="handleChangeName"
                            id="user-name"
                            name="name"
                            :placeholder="language[defineLanguage].userName"
                            autocomplete="off"
                    >
                    <label for="user-name">{{ language[defineLanguage].userName }}</label>
                </div>
                <div class="formGroup" v-bind:class="{ invalid: !isMailValid, valid: isMailCorrect }">
                    <input
                            v-model="mail"
                            @input="handleChangeMail"
                            id="user-email"
                            name="mail"
                            type="email"
                            formtarget="blank"
                            :placeholder="language[defineLanguage].userEmail"
                            autocomplete="off"
                    >
                    <label for="user-email">{{ language[defineLanguage].userEmail }}</label>
                </div>
                <div class="formGroup textarea" v-bind:class="{ invalid: !isMessageValid, valid: isMessageCorrect }">
                    <label for="textarea">{{ language[defineLanguage].userMessage }}</label>
                    <textarea
                              v-model="message"
                              @input="handleChangeMessage"
                              id="textarea"
                              class="labelTextarea"
                              rows="5" cols="45"
                              name="text">

                    </textarea>
                </div>
                <button
                        @click="handleSubmit"
                        type="submit"
                        class='btn'
                        data-text='SEND'
                >
                    <span>S</span>
                    <span>E</span>
                    <span>N</span>
                    <span>D</span>
                </button>
            </form>
        </div>
    </div>
</template>

<script src="./script.js"></script>

<style lang="sass" src="./style.sass" scoped></style>

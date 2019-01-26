<template>
    <section class="about">
        <div class="container">
            <div class="about__wrapper">
                <GiantTitle  :title="language[defineLanguage].aboutUs" class="heading--sm" :handleTitleRef="handleRef" />
                <RevercedTitle :title="language[defineLanguage].aboutUsSm"/>
                <div class="about__innerBox">
                    <div class="about__left">
                        <Form/>
                    </div>
                  <div class="about__right">
                      <div class="about__descr">
                          <h4 class="heading heading4">{{ language[defineLanguage].aboutUsSm }}</h4>
                          <p>{{ language[defineLanguage].description }}</p>
                      </div>
                    <div class="about__contacts">
                        <h4 class="heading heading4">{{ language[defineLanguage].contacts }}</h4>
                        <div class="about__item">
                            <p>{{ language[defineLanguage].addressUa }}</p>
                            <h6 class="heading heading6">{{ language[defineLanguage].addressUaStreet }}</h6>
                        </div>
                      <div class="about__item">
                          <p>{{ language[defineLanguage].addressEst }}</p>
                          <h6 class="heading heading6">{{ language[defineLanguage].addressEstStreet }}</h6>
                      </div>
                      <div class="about__item">
                          <p>{{ language[defineLanguage].addressBlr }}</p>
                          <h6 class="heading heading6">{{ language[defineLanguage].addressBlrStreet }}</h6>
                      </div>
                    </div>
                  </div>
              </div>
          </div>
        </div>
    </section>
</template>

<script src="./script.js"></script>

<style lang="sass" src="./style.sass" scoped></style>
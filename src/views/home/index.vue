<!--
 * @version: v 1.0.0
 * @Github: https://github.com/GitHubGanKai
 * @Author: GitHubGanKai
 * @Date: 2020-12-27 20:41:48
 * @LastEditors: gankai
 * @LastEditTime: 2021-01-02 20:29:34
 * @FilePath: /refactor-with-vue3/src/views/home/index.vue
-->
<template>
  <div class="home">
    <header class="home-header" :class="{ active: headerActive }">
      <div class="header-title">花贲</div>
      <div class="header-search">
        <svg-icon class="search-icon" icon-class="search"></svg-icon>
        <router-link tag="span" class="search-title" to="./search"
          >推荐搜索 关键词</router-link
        >
      </div>
      <!-- <svg-icon
        class="customer-service-icon"
        icon-class="customer-service"
      ></svg-icon> -->
    </header>
    <van-swipe
      class="swiper-carousel"
      lazy-render
      :autoplay="3000"
      :show-indicators="false"
    >
      <!-- <van-swipe-item v-for="(image, index) in homeImgs" :key="index">
        <img class="lazy_img" @click="handleClick" :src="image.imgUrl" />
      </van-swipe-item> -->
      <van-swipe-item>
        <img
          class="lazy_img"
          @click="handleClick"
          src="../../assets/banner/banner1.jpg"
        />
      </van-swipe-item>
      <van-swipe-item>
        <img
          class="lazy_img"
          @click="handleClick"
          src="../../assets/banner/banner2.jpg"
        />
      </van-swipe-item>
      <van-swipe-item>
        <img
          class="lazy_img"
          @click="handleClick"
          src="../../assets/banner/banner3.jpg"
        />
      </van-swipe-item>
    </van-swipe>
    <section class="home-notice">
      <van-notice-bar
        color="#fe7266"
        background="#fff"
        left-icon="volume-o"
        text="康乃馨、红玫瑰、向日葵、郁金香、百合等热拍中"
      />
    </section>
    <section class="home-tags">
      <ul class="tags-content">
        <router-link tag="li" class="tags-item" to="/classify">
          <!-- <svg-icon
            class="tags-icon"
            icon-class="chain-cat-boutique"
          ></svg-icon> -->
          <img src="../../assets/pts/玫瑰.png" alt="" class="tags-icon" />
          <span class="item-text">玫瑰</span>
        </router-link>
        <router-link tag="li" class="tags-item" to="/classify">
          <!-- <svg-icon class="tags-icon" icon-class="cm-area"></svg-icon> -->
          <img src="../../assets/pts/康乃馨.png" alt="" class="tags-icon" />
          <span class="item-text">康乃馨</span>
        </router-link>
        <router-link tag="li" class="tags-item" to="/classify">
          <!-- <svg-icon class="tags-icon" icon-class="collar-cm"></svg-icon> -->
          <img src="../../assets/pts/百合.png" alt="" class="tags-icon" />
          <span class="item-text">百合</span>
        </router-link>
        <router-link tag="li" class="tags-item" to="/classify">
          <!-- <svg-icon class="tags-icon" icon-class="coupon-svg"></svg-icon> -->
          <img src="../../assets/pts/菊.png" alt="" class="tags-icon" />
          <span class="item-text">多头菊</span>
        </router-link>
        <router-link tag="li" class="tags-item" to="/classify">
          <!-- <svg-icon class="tags-icon" icon-class="chain-cat-member"></svg-icon> -->
          <img src="../../assets/pts/绣球.png" alt="" class="tags-icon" />
          <span class="item-text">绣球</span>
        </router-link>
        <router-link tag="li" class="tags-item" to="/classify">
          <!-- <svg-icon
            class="tags-icon"
            icon-class="chain-cat-boutique"
          ></svg-icon> -->
          <img src="../../assets/pts/桔梗.png" alt="" class="tags-icon" />
          <span class="item-text">洋桔梗</span>
        </router-link>
        <router-link tag="li" class="tags-item" to="/classify">
          <!-- <svg-icon class="tags-icon" icon-class="cm-area"></svg-icon> -->
          <img src="../../assets/pts/薰衣草.png" alt="" class="tags-icon" />
          <span class="item-text">薰衣草</span>
        </router-link>
        <router-link tag="li" class="tags-item" to="/classify">
          <!-- <svg-icon class="tags-icon" icon-class="collar-cm"></svg-icon> -->
          <img src="../../assets/pts/向日葵.png" alt="" class="tags-icon" />
          <span class="item-text">向日葵</span>
        </router-link>
        <router-link tag="li" class="tags-item" to="/classify">
          <!-- <svg-icon class="tags-icon" icon-class="coupon-svg"></svg-icon> -->
          <img src="../../assets/pts/叶材.png" alt="" class="tags-icon" />
          <span class="item-text">叶材</span>
        </router-link>
        <router-link tag="li" class="tags-item" to="/classify">
          <!-- <svg-icon class="tags-icon" icon-class="chain-cat-member"></svg-icon> -->
          <img src="../../assets/pts/更多.png" alt="" class="tags-icon" />
          <span class="item-text">更多</span>
        </router-link>
      </ul>
    </section>

    <section class="spike-area">
      <ul class="spike-top">
        <router-link class="top-left" to="/successorder" tag="li">
          <div class="item-top">
            <span class="item-title">成交价格</span>
            <div class="time-text">
              <span class="eight-time">信阳</span>
              <div class="time-count-down">5-12 15:28</div>
              <!-- <van-count-down :time="timeData" class="time-count-down">
                <template v-slot="timeData">
                  <span class="time-item" v-if="timeData.hours < 10">{{
                    "0" + timeData.hours
                  }}</span>
                  <span class="time-item" v-else>{{ timeData.hours }}</span>
                  <i class="tow-point">:</i>
                  <span class="time-item" v-if="timeData.minutes < 10">{{
                    "0" + timeData.minutes
                  }}</span>
                  <span class="time-item" v-else>{{ timeData.minutes }}</span>
                  <i class="tow-point">:</i>
                  <span class="time-item" v-if="timeData.seconds < 10">{{
                    "0" + timeData.seconds
                  }}</span>
                  <span class="time-item" v-else>{{ timeData.seconds }}</span>
                </template>
              </van-count-down> -->
            </div>
          </div>
          <div class="item-info">
            <div class="item-content">
              <img
                src="../../assets/home/demo2.png"
                style="width: 54px;height: 54px;"
              />
              <span class="new-price">单头玫瑰</span>
              <span class="old-price down"
                >12.54 <van-icon name="arrow-down"
              /></span>
              <div class="arte down">
                <span>-1.53</span>
                <span>-5.60%</span>
              </div>
              <!-- <van-icon name="arrow-down" /> -->
            </div>
            <div class="item-content">
              <img
                src="../../assets/home/demo1.png"
                style="width: 54px;height: 54px;"
              />
              <span class="new-price">多头玫瑰</span>
              <span class="old-price up">7.13 <van-icon name="arrow-up"/></span>
              <div class="arte up">
                <span>-1.53</span>
                <span>-5.60%</span>
              </div>
              <!-- <van-icon name="arrow-up" /> -->
            </div>
            <div class="item-content">
              <img
                src="../../assets/home/demo3.png"
                style="width: 54px;height: 54px;"
              />
              <span class="new-price">粉玫瑰</span>
              <span class="old-price up"
                >43.11 <van-icon name="arrow-up"
              /></span>
              <div class="arte up">
                <span>-1.53</span>
                <span>-5.60%</span>
              </div>
              <!-- <van-icon name="arrow-up" /> -->
            </div>
            <div class="item-content">
              <img
                src="../../assets/home/demo3c.png"
                style="width: 54px;height: 54px;"
              />
              <span class="new-price">康乃馨</span>
              <span class="old-price down"
                >12.54 <van-icon name="arrow-down"
              /></span>
              <div class="arte down">
                <span>-1.53</span>
                <span>-5.60%</span>
              </div>
              <!-- <van-icon name="arrow-down" /> -->
            </div>
            <div class="item-content">
              <img
                src="../../assets/home/demo1a.png"
                style="width: 54px;height: 54px;"
              />
              <span class="new-price">向日葵</span>
              <span class="old-price up">7.13 <van-icon name="arrow-up"/></span>
              <div class="arte up">
                <span>-1.53</span>
                <span>-5.60%</span>
              </div>
              <!-- <van-icon name="arrow-up" /> -->
            </div>
            <div class="item-content">
              <img
                src="../../assets/home/demo2b.png"
                style="width: 54px;height: 54px;"
              />
              <span class="new-price">白百合</span>
              <span class="old-price up"
                >43.11 <van-icon name="arrow-up"
              /></span>
              <div class="arte up">
                <span>-1.53</span>
                <span>-5.60%</span>
              </div>
              <!-- <van-icon name="arrow-up" /> -->
            </div>
          </div>
        </router-link>
        <router-link class="top-right" to="/loveShop" tag="li">
          <div class="right-header">
            <span class="cat-spike-text">优质卖家</span>
            <span class="tag-text">推荐供应商</span>
          </div>
          <span class="good-item">去选购>></span>
          <div class="item-imgs">
            <div class="item-asq">
              <img src="../../assets/home/demo4.png" />
              <div>仙于</div>
            </div>
            <div class="item-asq">
              <img src="../../assets/home/demo4a.png" />
              <div>花屋</div>
            </div>
            <div class="item-asq">
              <img src="../../assets/home/demo5.png" />
              <div>花朝季</div>
            </div>
            <div class="item-asq">
              <img src="../../assets/home/demo5a.png" />
              <div>梵巷花堂</div>
            </div>
          </div>
        </router-link>
      </ul>
      <!-- 
      <ul class="spike-center">
        <router-link class="center-item" to="/specialSpike" tag="li">
          <span class="center-title">特价秒杀</span>
          <span class="center-descr">10元抢购</span>
          <img src="../../assets/image/home/demo6.png" />
        </router-link>
        <router-link class="center-item" to="/brandSpike" tag="li">
          <span class="center-title">品牌秒杀</span>
          <span class="center-descr" style="color: #dd3749">笔记本秒杀</span>
          <img src="../../assets/image/home/demo7.png" />
        </router-link>
        <router-link class="center-item" to="/newProductLaunch" tag="li">
          <span class="center-title">新品首发</span>
          <span class="center-descr" style="#FC6380">小黑盒新品</span>
          <img src="../../assets/image/home/demo8.png" />
        </router-link>
        <router-link class="center-item" to="/premiumRanking" tag="li">
          <span class="center-title">优品排行</span>
          <span class="center-descr" style="color: #91c95b">榜上好物购</span>
          <img src="../../assets/image/home/demo9.png" />
        </router-link>
      </ul> -->
      <ul class="spike-bottom">
        <router-link class="bottom-left" style="width: 55%;" to="/classify">
          <div class="bottom-left-header">
            <span class="big-buy">基地直销</span>
            <span class="goods-name">
              成熟度
              <span> 中度</span>
            </span>
          </div>
          <span class="belive-big" style="margin-bottom: 5px;">去选购>></span>
          <div class="bottom-images">
            <div
              class="flex d-column"
              style="margin-right: 5px;margin-top: 5px;"
            >
              <img
                src="../../assets/home/demo10.png"
                style="width: 70px;height: 70px;"
              />
              <div style="font: 9px;color: #333;font-weight: 700;">郁金香</div>
              <div
                style="font-size: 9px;color: #fda1c8;width: 90%;display: flex;justify-content: space-between;align-items: center;"
              >
                <span
                  ><span style="font-size: 13px;font-weight: 700;">1.99</span
                  >元</span
                >
                <!-- <div
                  style="width: 9px;height: 9px;border-radius: 50%;border: 1px solid #fda1c8; font-size: 8px;
                text-align: center;line-height: 7px;font-weight: 700;color: #fff;background-color: #fda1c8;"
                >
                  +
                </div> -->
                <van-icon name="add" size="12" />
                <!-- <van-icon name="add" /> -->
              </div>
            </div>
            <div class="flex d-column" style="margin-top: 5px;">
              <img
                src="../../assets/home/demo10a.png"
                style="width: 70px;height: 70px;"
              />
              <div style="font: 9px;color: #333;font-weight: 700;">薰衣草</div>
              <div
                style="font-size: 9px;color: #fda1c8;width: 90%;display: flex;justify-content: space-between;align-items: center;"
              >
                <span
                  ><span style="font-size: 13px;font-weight: 700;">1.99</span
                  >元</span
                >
                <van-icon name="add" size="12" />
                <!-- <div
                  style="width: 9px;height: 9px;border-radius: 50%;border: 1px solid #fda1c8; font-size: 8px;
                text-align: center;line-height: 7px;font-weight: 700;color: #fff;background-color: #fda1c8;"
                >
                  +
                </div> -->
              </div>
            </div>
            <div
              class="flex d-column"
              style="margin-right: 5px;margin-top: 5px;"
            >
              <img
                src="../../assets/home/demo11.png"
                style="width: 70px;height: 70px;"
              />
              <div style="font: 9px;color: #333;font-weight: 700;">向日葵</div>
              <div
                style="font-size: 9px;color: #fda1c8;width: 90%;display: flex;justify-content: space-between;align-items: center;"
              >
                <span
                  ><span style="font-size: 13px;font-weight: 700;">1.99</span
                  >元</span
                >
                <!-- <div
                  style="width: 9px;height: 9px;border-radius: 50%;border: 1px solid #fda1c8; font-size: 8px;
                text-align: center;line-height: 7px;font-weight: 700;color: #fff;background-color: #fda1c8;"
                >
                  +
                </div> -->
                <van-icon name="add" size="12" />
                <!-- <van-icon name="add" /> -->
              </div>
            </div>
            <div class="flex d-column" style="margin-top: 5px;">
              <img
                src="../../assets/home/demo11b.png"
                style="width: 70px;height: 70px;"
              />
              <div style="font: 9px;color: #333;font-weight: 700;">demo11b</div>
              <div
                style="font-size: 9px;color: #fda1c8;width: 90%;display: flex;justify-content: space-between;align-items: center;"
              >
                <span
                  ><span style="font-size: 13px;font-weight: 700;">1.99</span
                  >元</span
                >
                <!-- <div
                  style="width: 9px;height: 9px;border-radius: 50%;border: 1px solid #fda1c8; font-size: 8px;
                text-align: center;line-height: 7px;font-weight: 700;color: #fff;background-color: #fda1c8;"
                >
                  +
                </div> -->
                <van-icon name="add" size="12" />
              </div>
            </div>
          </div>
        </router-link>
        <router-link
          class="bottom-left"
          style="width: 45%;padding-bottom: 30px;"
          to="/chainCatSpike"
          tag="li"
        >
          <div class="bottom-left-header">
            <span class="big-buy">特惠秒杀</span>
            <span class="goods-name addColor">低至1.99元</span>
          </div>
          <span class="belive-big">距结束还剩 01:22:37</span>
          <div class="bottom-images" style="margin-top: 10px;">
            <div class="flex d-column" style="width: 48%;">
              <img
                src="../../assets/home/demo12.png"
                style="width: 70px;height: 70px;"
              />
              <div
                style="font-size: 10px;color: #db142b;width: 95%;display: flex;justify-content: space-between;align-items: center;margin-top: 8px;margin-bottom: 7rpx;"
              >
                <span style="font-weight: 700;">秒杀价</span>
                <span><span style="font-size: 12px;">1.99</span>元</span>
              </div>
            </div>
            <div class="flex d-column" style="width: 48%;">
              <img
                src="../../assets/home/demo12a.png"
                style="width: 70px;height: 70px;"
              />
              <div
                style="font-size: 10px;color: #db142b;width: 95%;display: flex;justify-content: space-between;align-items: center;margin-top: 8px;margin-bottom: 7rpx;"
              >
                <span style="font-weight: 700;">秒杀价</span>
                <span><span style="font-size: 12px;">1.99</span>元</span>
              </div>
            </div>
            <div class="flex d-column" style="width: 48%;margin-top: 12px;">
              <img
                src="../../assets/home/demo13.png"
                style="width: 70px;height: 70px;"
              />
              <div
                style="font-size: 10px;color: #db142b;width: 95%;display: flex;justify-content: space-between;align-items: center;margin-top: 8px;margin-bottom: 7rpx;"
              >
                <span style="font-weight: 700;">秒杀价</span>
                <span><span style="font-size: 12px;">1.99</span>元</span>
              </div>
            </div>
            <div class="flex d-column" style="width: 48%;margin-top: 12px;">
              <img
                src="../../assets/home/demo13a.png"
                style="width: 70px;height: 70px;"
              />
              <div
                style="font-size: 10px;color: #db142b;width: 95%;display: flex;justify-content: space-between;align-items: center;margin-top: 8px;margin-bottom: 7rpx;"
              >
                <span style="font-weight: 700;">秒杀价</span>
                <span><span style="font-size: 12px;">1.99</span>元</span>
              </div>
            </div>
          </div>
        </router-link>
      </ul>
    </section>

    <div class="content-tabs">
      <van-tabs
        :swipe-threshold="5"
        title-inactive-color="#3a3a3a"
        title-active-color="#D8182D"
        background="transparent"
        v-model="active"
        animated
      >
        <van-tab
          v-for="(list, index) in tabArray"
          :title="list.describe"
          :name="list.type"
          :key="index"
        >
          <template #title>
            <div class="slot-title">
              <b class="tab-title">{{ list.title }}</b>
              <!-- <span class="tab-name">{{list.describe}}</span> -->
              <span class="tab-name">{{ list.name }}</span>
            </div>
          </template>

          <section class="goods-box search-wrap">
            <ul class="goods-content">
              <li v-for="(item, index) in list.list" :key="index">
                <router-link class="goods-img" tag="div" to="/classify/product">
                  <img :src="item.img" />
                </router-link>
                <div class="goods-layout">
                  <div class="goods-title">{{ item.name }}</div>
                  <span class="goods-div">{{ item.title }}</span>
                  <div class="goods-desc">
                    <span class="goods-price">
                      <i>{{ item.productCnyPrice }}</i>
                      <span class="force-value">{{ item.forceValue }}起</span>
                    </span>
                    <span class="add-icon" @click="addToCart($event, item)">
                      <svg-icon icon-class="add"></svg-icon>
                    </span>
                  </div>
                </div>
              </li>
            </ul>
          </section>
        </van-tab>
      </van-tabs>
    </div>
    <div class="ballWrap">
      <transition
        @before-enter="beforeEnter"
        @enter="enter"
        @afterEnter="afterEnter"
      >
        <div class="ball" v-if="show">
          <li class="inner">
            <span class="cubeic-add" @click="addToCart($event, item)">
              <svg-icon class="add-icon" icon-class="add"></svg-icon>
            </span>
          </li>
        </div>
      </transition>
    </div>
    <tabbar></tabbar>
  </div>
</template>

<script>
import { ref, reactive, onMounted, toRefs, getCurrentInstance } from "vue";
import { useStore } from "vuex";
import { useRouter, useRoute } from "vue-router";
import Tabbat from "@/components/tabbar";
export default {
  name: "home",
  components: {
    Tabbat
  },
  setup(props, context) {
    const { ctx } = getCurrentInstance();
    const $store = useStore();
    // ctx.$store === $store  ==>true 其实是同一个对象！

    const $router = useRouter();
    const $route = useRoute(); // 可以拿到所有和路由相关的参数
    const active = ref("");
    const timeData = ref(36000000);
    const headerActive = ref(false);

    const state = reactive({
      homeImgs: [],
      tabArray: []
    });

    const ball = reactive({
      show: false,
      el: ""
    });

    ctx.$http.get("http://test.happymmall.com/home/homeData").then(res => {
      const { images, tabList } = res.data;
      state.tabArray = tabList;
      state.homeImgs = images;
    });

    onMounted(() => {
      ctx.$eventBus.$emit("changeTag", 0);
      window.addEventListener("scroll", pageScroll);
    });

    const addToCart = (event, tag) => {
      $store.commit("cart/addToCart", tag);
      ball.show = true;
      ball.el = event.target;
    };

    const beforeEnter = el => {
      const dom = ball.el;
      const rect = dom.getBoundingClientRect();
      const x = rect.left - window.innerWidth * 0.6;
      const y = -(window.innerHeight - rect.top);
      el.style.display = "block";
      el.style.transform = `translate3d(0,${y}px,0)`;
      const inner = el.querySelector(".inner");
      inner.style.transform = `translate3d(${x}px,0,0)`;
    };

    const enter = (el, done) => {
      document.body.offsetHeight;
      el.style.transform = "translate3d(0,0,0)";
      const inner = el.querySelector(".inner");
      inner.style.transform = "translate3d(0,0,0)";
      el.addEventListener("transitionend", done);
    };

    const afterEnter = el => {
      ball.show = false;
      el.style.display = "none";
    };

    const handleClick = linkUrl => {
      $router.push("/classify/product");
    };

    const pageScroll = () => {
      const scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      scrollTop > 100
        ? (headerActive.value = true)
        : (headerActive.value = false);
    };

    return {
      active,
      timeData,
      headerActive,
      ...toRefs(ball),
      ...toRefs(state),
      addToCart,
      beforeEnter,
      enter,
      afterEnter,
      handleClick,
      pageScroll
    };
  }
};
</script>

<style scoped lang="scss" src="./index.scss"></style>

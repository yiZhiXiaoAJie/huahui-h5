<template>
  <div class="product-layout">
    <van-swipe :autoplay="3000" :height="350">
      <van-swipe-item>
        <img src="/image/img1.jpg" style="width: 100vw;" />
      </van-swipe-item>
      <van-swipe-item>
        <img src="/image/img7.jpg" style="width: 100vw;" />
      </van-swipe-item>
         <van-swipe-item>
        <img src="/image/img9.jpg" style="width: 100vw;" />
      </van-swipe-item>
         <van-swipe-item>
        <img src="/image/img11.jpg" style="width: 100vw;" />
      </van-swipe-item>
    </van-swipe>

    <span class="btn-left" @click="$router.go(-1)">
      <svg-icon icon-class="green-btn"></svg-icon>
    </span>
    <section class="progress-bar">
      <ul class="progress-left">
        <li class="spike-price">
          <span class="true-price">￥140</span>
          <span class="exchange-rate">用户2出价</span>
        </li>
        <li class="spike-bottom">
          <del class="old-price">￥100</del>
          <progress class="lm-progress" value="22" max="100"></progress>
        </li>
      </ul>
      <ul class="progress-right">
        <div class="right-content">
          <li class="end-time">
            <i>距结束还剩:</i>
          </li>
          <li class="time-value">
            <i>00:26:50</i>
          </li>
        </div>
      </ul>
    </section>
    <div style="width: 90vw; margin-left: 5vw;margin-top: 10px;">
      <van-notice-bar left-icon="volume-o" :scrollable="false"  style="width: 100%;">
  <van-swipe
    vertical
    class="notice-swipe"
    :autoplay="3000"
    :touchable="false"
    :show-indicators="false"
  >
    <van-swipe-item>河南***用户出价：￥110</van-swipe-item>
    <van-swipe-item>河南***用户出价：￥120</van-swipe-item>
    <van-swipe-item>河南***用户出价：￥80</van-swipe-item>
  </van-swipe>
</van-notice-bar>

    </div>
    <ul class="product-content">
      <li class="product-title">
        <div class="text-left">
          <span class="force-value">￥50起拍</span>
        </div>
        <div>
          <span class="heart-full" @click="isLike = !isLike">
            <svg-icon v-if="isLike" icon-class="heart-full"></svg-icon>
            <svg-icon v-else icon-class="heart-null"></svg-icon>
          </span>
        </div>
      </li>
      <!-- <li class="product-price">
        <span>购买该商品可获得积分，算力值可兑换CM币</span>
      </li> -->
      <li class="product-price">
        <span style="font-size: 18px;color: #333;">粉玫瑰</span>
      </li>
      <li class="product-info">
        <i>购买该商品可获得积分</i>
        <i>快递包邮</i>
      </li>
      <li class="item-info">
        <van-field label="发货地" left-icon="location-o" disabled></van-field>
      </li>
      <!-- <li class="item-info" @click="showPopup">
        <van-field label="选择" disabled placeholder="选择颜色分类，尺码 "></van-field>
        <van-icon name="arrow" />
      </li> -->
      <li class="store-info">
        <div class="store-detail" @click="handleStoreName">
          <img src="../../assets/home/demo4.png" class="store-header" />
          <span class="store-name">仙于</span>
        </div>
        <div class="store-btn">
          <svg-icon icon-class="message-round"></svg-icon>
          <van-button size="small" @click="handleConnectStore" type="danger"
            >进店逛逛</van-button
          >
        </div>
      </li>
    </ul>
    <div class="item-details">
      <span @click="handleViewDetail">用户出价</span>
    </div>

    <div
      style="border-radius: 10px;width: 90vw;margin-left: 5vw;background: #eee;margin-top: 10px;padding: 10px;"
    >
    <van-steps direction="vertical" :active="0" active-color="#ec3a58">
  <van-step>
    <h3>用户2</h3>
    <p>￥140</p>
  </van-step>
  <van-step>
    <h3>用户4</h3>
    <p>￥120</p>
  </van-step>
  <van-step>
    <h3>用户7</h3>
    <p>￥110</p>
  </van-step>
</van-steps>
      <!-- <div class="item-s">
        <div>用户2</div>
        <div>￥140</div>
      </div>
      <div class="item-s" style="margin-top: 10px;">
        <div>用户4</div>
        <div>￥120</div>
      </div>
      <div class="item-s" style="margin-top: 10px;">
        <div>用户7</div>
        <div>￥110</div>
      </div> -->
    </div>
    <div class="item-details">
      <span @click="handleViewDetail">宝贝详情</span>
      <img
        src="/image/cont.jpg"
        alt=""
        style="width: 100vw;height: auto;margin-top: 20px;"
      />
    </div>
    <van-popup
      class="select-popup"
      v-model:show="show"
      round
      position="bottom"
      :style="{ height: '40%' }"
    >
      <section class="popup-content">
        <span class="close-icon" @click="show = false">
          <svg-icon icon-class="close-popup"></svg-icon>
        </span>
        <ul class="popup-top">
          <img src="/image/img2.jpg" />
          <li class="item-specification">
            <span class="item-price">目前￥140</span>
            <!-- <span class="item-count">库存2279件</span> -->
            <span class="item-colors">粉玫瑰</span>
          </li>
        </ul>
        <ul class="popup-center">
          <!-- <li class="popup-color">
            <span class="color-text">颜色</span>
            <div class="color-list">
              <span
                class="color-tag"
                v-for="(item, index) in listData"
                :class="{ active: item.selected }"
                :key="index"
                @click="handleSelected(item)"
              >
                <img :src="item.imgSrc" />
                <span>{{ item.colorName }}</span>
              </span>
            </div>
          </li>
          <li class="popup-size">
            <span class="size-text">尺码</span>
            <div class="size-list">
              <span class="size-item">S</span>
              <span class="size-item">M</span>
              <span class="size-item">L</span>
              <span class="size-item">XL</span>
              <span class="size-item">4XL</span>
              <span class="size-item">5XL</span>
              <span class="size-item">6XL</span>
              <span class="size-item">7XL</span>
            </div>
          </li> -->
          <li class="popup-quantity">
            <!-- <span class="quantity-text">加价金额</span> -->
            <!-- <van-stepper v-model="stepperValue" input-width="31px" button-size="12px" /> -->
            <van-cell-group inset>
              <van-field
                v-model="stepperValue"
                label="加价金额"
                placeholder="请输入加价金额"
              />
            </van-cell-group>
          </li>
        </ul>
      </section>
      <div class="product-footer">
        <van-action-bar>
          <van-action-bar-button
            @click="handleAddToCart"
            type="warning"
            text="加入购物车"
          />
          <van-action-bar-button
            type="danger"
            @click="handleToBuy"
            text="立即加价"
          />
        </van-action-bar>
      </div>
    </van-popup>
    <div class="product-footer">
      <van-action-bar>
        <van-action-bar-button
          @click="handleAddToCart"
          type="warning"
          text="加入购物车"
        />
        <van-action-bar-button
          type="danger"
          @click="show = true"
          text="立即加价"
        />
      </van-action-bar>
    </div>
  </div>
</template>

<script>
import { ref, reactive, onMounted, toRefs, getCurrentInstance } from "vue";
import { useRouter } from "vue-router";
export default {
  name: "product",

  setup() {
    const { ctx } = getCurrentInstance();
    const show = ref(false);
    const $router = useRouter();
    const showDetail = ref(false);

    let productImgs = [];

    const state = reactive({
      listData: [
        {
          imgSrc: "http://gankai.gitee.io/vue-jd-h5/img/store3.cc632dc8.png",
          colorName: "黑色",
          selected: false
        },
        {
          imgSrc: "http://gankai.gitee.io/vue-jd-h5/img/store3.cc632dc8.png",
          colorName: "黑色",
          selected: false
        },
        {
          imgSrc: "http://gankai.gitee.io/vue-jd-h5/img/store3.cc632dc8.png",
          colorName: "黑色",
          selected: false
        },
        {
          imgSrc: "http://gankai.gitee.io/vue-jd-h5/img/store3.cc632dc8.png",
          colorName: "黑色",
          selected: false
        },
        {
          imgSrc: "http://gankai.gitee.io/vue-jd-h5/img/store3.cc632dc8.png",
          colorName: "黑色",
          selected: false
        }
      ]
    });

    const isSpike = ref(false);
    const isLike = ref(false);
    const current = ref(0);
    const stepperValue = ref("");
    const showPopup = () => {
      show.value = true;
    };

    onMounted(async () => {
      const { data } = await ctx.$http.get(
        "http://test.happymmall.com/home/remderImg"
      );
      const { productImages } = data;
      const i = Math.floor(Math.random() * 6);
      productImgs = productImages[i];
    });

    const handleViewDetail = () => {
      showDetail.value = true;
    };
    const handleToBuy = () => {
      $router.push("/order/orderDetail");
    };
    const handleAddToCart = () => {
      ctx.$toast.success({
        message: "添加成功~",
        duration: 1500,
        icon: "like-o"
      });
    };

    const handleSelected = item => {
      item.selected = true;
      state.listData.map(it => {
        it == item ? (it.selected = true) : (it.selected = false);
      });
    };
    const handleStoreName = () => {
      $router.push("/storeDetail");
    };
    const handleConnectStore = () => {
      $router.push("/storeDetail");
    };
    return {
      ...toRefs(state),
      productImgs,
      stepperValue,
      current,
      isLike,
      isSpike,
      showDetail,
      show,
      showPopup,
      handleViewDetail,
      handleAddToCart,
      handleConnectStore,
      handleStoreName,
      handleToBuy,
      handleSelected
    };
  }
};
</script>

<style lang="scss" scoped>
#app{
  background: #fff;
}
.product-layout {
  background-color: white;
  height: auto;
  margin-bottom: 45px;
  padding-bottom: 45px;
  ::v-deep .van-swipe-item {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .lazy_img {
    height: 350px;
    width: 100%;
  }

  .btn-left {
    position: fixed;
    left: 16px;
    top: 14px;
  }

  .progress-bar {
    .progress-left {
      display: inline-block;
      position: relative;
      min-width: 375px;
      height: 50px;
      background: url("../../assets/image/product/rectangle-left.png") no-repeat
        left center;
      background-size: 76% 100%;
      z-index: 2;
      padding: 6px 16px;
      .spike-price {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        color: white;
        .true-price {
          font-size: 17px;
        }
        .exchange-rate {
          font-size: 9px;
          border: 1px solid white;
          border-radius: 6px;
          display: inline-block;
          width: 108px;
          text-align: center;
          line-height: 20px;
          height: 20px;
          margin-left: 10px;
        }
      }
      .spike-bottom {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        .old-price {
          font-size: 11px;
          color: #fff;
          margin-right: 16px;
        }
        .lm-progress {
          width: 70px;
          height: 10px;
          border-radius: 5px;
          color: #d8182d;
          display: inline-block;
        }
      }
    }
    .progress-right {
      display: inline-block;
      position: absolute;
      right: 0;
      width: 100%;
      height: 50px;
      background: url("../../assets/image/product/rectangle-right.png")
        no-repeat right center;
      background-size: 32% 100%;
      padding-right: 16px 20px;
      .right-content {
        display: flex;
        justify-content: flex-end;
        flex-direction: column;
        align-items: flex-end;
        font-size: 10px;
        .end-time {
          padding-top: 10px;
          padding-right: 20px;
          font-size: 10px;
          color: white;
        }
        .time-value {
          padding-right: 10px;
        }
      }
    }
  }
  .product-content {
    padding-top: 20px;
    font-size: 14px;
    .product-title {
      padding-left: 16px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .text-left {
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .force-value {
        display: inline-block;
        width: 54px;
        text-align: center;
        line-height: 20px;
        height: 20px;
        color: #fff;
        font-size: 9px;
        background-color: #d8182d;
        border-radius: 10px 10px;
      }
      .heart-full {
        padding: 0 17px;
      }
      .item-desc {
        font-size: 14px;
        color: #3a3a3a;
        padding-left: 7px;
      }
    }
    .product-price {
      color: #949497;
      font-size: 9px;
      padding-top: 8px;
      font-weight: 600;
      padding-left: 16px;
    }
    .product-info {
      display: flex;
      justify-content: space-between;
      padding-left: 16px;
      padding-top: 20px;
      padding-bottom: 10px;
      padding-right: 40px;
      font-size: 11px;
      color: #949497;
      box-sizing: border-box;
    }
    .store-info {
      display: flex;
      justify-content: space-between;
      margin-top: 10px;
      margin-bottom: 10px;
      ::v-deep .van-button--danger {
        background-color: #d8182d;
        border: 1px solid #d8182d;
      }
      .store-detail {
        padding-left: 16px;
        padding-top: 16px;
        .store-header {
          display: inline-block;
          width: 24px;
          height: 24px;
          vertical-align: middle;
        }
        .store-name {
          vertical-align: middle;
          color: #3a3a3a;
          padding-left: 4px;
        }
      }
      .store-btn {
        padding-right: 16px;
        padding-top: 10px;
        ::v-deep .van-button {
          margin-left: 10px;
        }
      }
    }
    .item-info {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 95%;
      position: relative;
      .anchor-point {
        position: absolute;
        left: 90px;
        .svg-icon {
          width: 15px;
          height: 15px;
        }
      }
    }
    .product-detail {
      padding-left: 16px;
      padding-top: 20px;
      color: #d8182d;
    }
  }
  .item-details {
    text-align: center;
    font-size: 16px;
    color: #3a3a3a;
    padding-top: 15px;
    span {
      box-shadow: 1px -10px 1px -4px rgba(254, 77, 109, 0.5) inset;
    }
    .html-class {
      margin-top: 20px;
      ::v-deep img {
        width: 375px;
      }
      ::v-deep div {
        background-size: 50% 100%;
      }
    }
  }
  .select-popup {
    padding: 20px;
    .popup-content {
      padding: 15px;
      .close-icon {
        float: right;
      }
      .popup-top {
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        .item-specification {
          display: flex;
          padding-left: 10px;
          justify-content: flex-end;
          align-items: flex-start;
          flex-direction: column;
          font-size: 14px;
          height: 100px;
          color: #3a3a3a;
          .item-count {
            font-size: 14px;
            padding: 3px 0;
          }
          .item-colors {
            font-size: 11px;
            padding: 3px 0;
          }
          .item-price {
            padding: 3px 0;
            color: #d8182d;
            font-size: 17px;
            font-weight: 600;
          }
        }
        img {
          width: 100px;
          height: 100px;
        }
      }
      .popup-center {
        .popup-color {
          .color-text {
            font-size: 14px;
            color: #3a3a3a;
            font-weight: 600;
            padding-bottom: 10px;
          }
          .color-list {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            .color-tag {
              display: flex;
              justify-content: flex-start;
              align-items: center;
              width: 75px;
              height: 29px;
              font-size: 14px;
              background-color: #efeff4;
              border: 1px solid #efeff4;
              border-radius: 4px;
              margin-right: 16px;
              padding-right: 10px;
              margin-top: 10px;
              img {
                padding-right: 10px;
                padding-left: 2px;
                width: 24px;
                height: 24px;
              }
              span {
                min-width: 30px;
              }
            }
            .color-tag.active {
              border: 1px solid #d8182d;
              background-color: white;
              color: #d8182d;
            }
          }
        }
        .popup-size {
          .size-text {
            font-size: 14px;
            color: #3a3a3a;
            font-weight: 600;
            padding-bottom: 10px;
          }
          .size-list {
            display: flex;
            flex-wrap: wrap;
            justify-content: flex-start;
            align-items: center;
            .size-item {
              font-size: 13px;
              width: 42px;
              height: 24px;
              display: flex;
              justify-content: center;
              align-items: center;
              border-radius: 4px;
              background-color: #efeff4;
              margin-right: 16px;
              margin-top: 10px;
            }
          }
        }
        .popup-quantity {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 32px;
          .quantity-text {
            font-weight: 600;
            font-size: 14px;
            color: #3a3a3a;
          }
          ::v-deep .van-stepper__input {
            width: 31px;
            height: 20px;
            padding: 0;
            color: #949497;
            font-weight: normal;
            background-color: transparent;
            border: 1px solid #dbdbdb;
          }
          ::v-deep .van-stepper__plus {
            border: 1px solid #dbdbdb;
            background-color: transparent;
            width: 16px;
            height: 22px;
            border-radius: 0;
          }
          ::v-deep .van-stepper__minus {
            border-radius: 0;
            border: 1px solid #dbdbdb;
            background-color: transparent;
            width: 16px;
            height: 22px;
          }
        }
      }
    }
  }
  ::v-deep .van-popup--bottom {
    border-radius: 16px 16px 0 0;
  }
  .product-footer {
    ::v-deep .van-button--warning {
      background-color: #f3ca43;
      border: 1px solid #f3ca43;
      height: 44px;
      line-height: 44px;
    }
    ::v-deep .van-button--danger {
      height: 44px;
      line-height: 44px;
      background-color: #d8182d;
      border: 1px solid #d8182d;
    }
  }
}
.item-s {
  width: 100%;
  box-sizing: border-box;
  font-size: 16px;
  font-weight: 700;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #333;
  border-bottom: 1px solid #fff;
}
.notice-swipe {
    height: 40px;
    line-height: 40px;
  }
</style>

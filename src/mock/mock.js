const Mock = require("mockjs");

const hotData = {
  status: 0,
  data: [
    {
      title: "情人节礼物",
      hot: 1
    },
    {
      title: "999朵玫瑰",
      hot: 1
    },
    {
      title: "粉玫瑰",
      hot: 0
    },
    {
      title: "郁金香",
      hot: 0
    },
    {
      title: "母亲节礼物",
      hot: 1
    },
    {
      title: "绣球",
      hot: 0
    },
    {
      title: "向日葵",
      hot: 0
    }
  ]
};

const homeData = {
  status: 0,
  images: [
    {
      imgUrl: require("@/assets/image/home/banner5.jpg"),
      categoryId: 100018
    },
    {
      imgUrl: require("@/assets/image/home/banner6.jpg"),
      categoryId: 100008
    },
    {
      imgUrl: require("@/assets/image/home/banner7.jpg"),
      categoryId: 100016
    },
    {
      imgUrl: require("@/assets/image/home/banner8.jpg"),
      categoryId: 100035
    }
  ],
  images2: [
    {
      imgUrl:
        "//m.360buyimg.com/mobilecms/jfs/t1/3926/29/4138/254748/5b9b646dE45cbeb7f/f80c8f7c24273bc1.jpg!cr_1125x549_0_72",
      categoryId: 100035
    },

    {
      imgUrl: require("@/assets/image/home/test11.png"),
      categoryId: 100020
    },
    {
      imgUrl: require("@/assets/image/home/test10.png"),
      categoryId: 100019
    }
  ],
  tabList: [
    {
      title: "精选",
      name: "猜你喜欢",
      list: [
        {
          name: "如沐春风",
          img: require("@/assets/classifyNursing/美妆-1.png"),
          title: "11朵玫瑰",
          forceValue: 88,
          price: "$525"
        },
        {
          name: "一笑倾城",
          img: require("@/assets/classifyNursing/美妆-2.png"),
          title: "11朵白玫瑰茉莉花小香风",
          forceValue: 45,
          price: "$525"
        },
        {
          name: "璨璨亦漫慢",
          img: require("@/assets/classifyNursing/美妆-3.png"),
          title: "19朵香槟玫瑰花束",
          forceValue: 68,
          price: "$525"
        },
        {
          name: "暖春祝福",
          img: require("@/assets/classifyNursing/美妆-4.png"),
          title: "11朵康乃馨",
          forceValue: 45,
          price: "$525"
        },
        {
          name: "风幕云尘",
          img: require("@/assets/classifyNursing/美妆-5.png"),
          title: "兵乓菊粉玫瑰花紫罗",
          forceValue: 168,
          price: "$525"
        },
        {
          name: "温柔拾光",
          img: require("@/assets/classifyNursing/美妆-6.png"),
          title: "粉玫瑰花束混搭康乃馨绣球蓝星",
          forceValue: 118,
          price: "$525"
        }
      ]
    },
    {
      title: "直销",
      name: "基地直销",
      list: [
        {
          name: "如沐春风",
          img: require("@/assets/classifyNursing/美妆-1.png"),
          title: "11朵玫瑰",
          forceValue: 88,
          price: "$525"
        },
        {
          name: "一笑倾城",
          img: require("@/assets/classifyNursing/美妆-2.png"),
          title: "11朵白玫瑰茉莉花小香风",
          forceValue: 45,
          price: "$525"
        },
        {
          name: "璨璨亦漫慢",
          img: require("@/assets/classifyNursing/美妆-3.png"),
          title: "19朵香槟玫瑰花束",
          forceValue: 68,
          price: "$525"
        },
        {
          name: "暖春祝福",
          img: require("@/assets/classifyNursing/美妆-4.png"),
          title: "11朵康乃馨",
          forceValue: 45,
          price: "$525"
        },
        {
          name: "风幕云尘",
          img: require("@/assets/classifyNursing/美妆-5.png"),
          title: "兵乓菊粉玫瑰花紫罗",
          forceValue: 168,
          price: "$525"
        },
        {
          name: "温柔拾光",
          img: require("@/assets/classifyNursing/美妆-6.png"),
          title: "粉玫瑰花束混搭康乃馨绣球蓝星",
          forceValue: 118,
          price: "$525"
        }
      ]
    }
  ]
};

const categoryData = {
  status: 0,
  tabslabel: [
    {
      label: "热门推荐",
      active: true
    },
    {
      label: "手机数码",
      active: false
    },
    {
      label: "电脑办公",
      active: false
    },
    {
      label: "计生情趣",
      active: false
    },
    {
      label: "美妆护肤",
      active: false
    },

    {
      label: "个人清洁",
      active: false
    },
    {
      label: "汽车生活",
      active: false
    },
    {
      label: "男装",
      active: false
    },
    {
      label: "女装",
      active: false
    },
    {
      label: "超市",
      active: false
    },
    {
      label: "户外运动",
      active: false
    },
    {
      label: "男装",
      active: false
    },
    {
      label: "女装",
      active: false
    },
    {
      label: "超市",
      active: false
    },
    {
      label: "户外运动",
      active: false
    },
    {
      label: "其他",
      active: false
    }
  ],
  categoryData: [
    {
      name: "玫瑰",
      mainImgUrl: require("../assets/pts/玫瑰.png"),
      list: [
        {
          title: "玫瑰",
          productList: [
            {
              title: "单头玫瑰",
              imgUrl: require("../assets/home/demo2.png")
            },
            {
              title: "双头玫瑰",
              imgUrl: require("../assets/home/demo1.png")
            },
            {
              title: "粉玫瑰",
              imgUrl: require("../assets/home/demo3.png")
            },
             {
              title: "单头玫瑰",
              imgUrl: require("../assets/home/demo2.png")
            },
            {
              title: "双头玫瑰",
              imgUrl: require("../assets/home/demo1.png")
            },
            {
              title: "粉玫瑰",
              imgUrl: require("../assets/home/demo3.png")
            },
             {
              title: "单头玫瑰",
              imgUrl: require("../assets/home/demo2.png")
            },
            {
              title: "双头玫瑰",
              imgUrl: require("../assets/home/demo1.png")
            },
            {
              title: "粉玫瑰",
              imgUrl: require("../assets/home/demo3.png")
            },
             {
              title: "单头玫瑰",
              imgUrl: require("../assets/home/demo2.png")
            },
            {
              title: "双头玫瑰",
              imgUrl: require("../assets/home/demo1.png")
            },
            {
              title: "粉玫瑰",
              imgUrl: require("../assets/home/demo3.png")
            },
             {
              title: "单头玫瑰",
              imgUrl: require("../assets/home/demo2.png")
            },
            {
              title: "双头玫瑰",
              imgUrl: require("../assets/home/demo1.png")
            },
            {
              title: "粉玫瑰",
              imgUrl: require("../assets/home/demo3.png")
            },
             {
              title: "单头玫瑰",
              imgUrl: require("../assets/home/demo2.png")
            },
            {
              title: "双头玫瑰",
              imgUrl: require("../assets/home/demo1.png")
            },
            {
              title: "粉玫瑰",
              imgUrl: require("../assets/home/demo3.png")
            },
          ]
        }
      ]
    },
    {
      name: "康乃馨",
      mainImgUrl:
        "//img30.360buyimg.com/mcoss/jfs/t14743/292/279117506/48503/9b7d9f2c/5a28ea97N36cb4d16.jpg",
      list: [
        {
          title: "热门分类",
          productList: [
            {
              title: "康乃馨",
              imgUrl: require("../assets/home/demo3c.png")
            },
             {
              title: "康乃馨",
              imgUrl: require("../assets/home/demo3c.png")
            }, {
              title: "康乃馨",
              imgUrl: require("../assets/home/demo3c.png")
            }, {
              title: "康乃馨",
              imgUrl: require("../assets/home/demo3c.png")
            }, {
              title: "康乃馨",
              imgUrl: require("../assets/home/demo3c.png")
            }, {
              title: "康乃馨",
              imgUrl: require("../assets/home/demo3c.png")
            }, {
              title: "康乃馨",
              imgUrl: require("../assets/home/demo3c.png")
            }, {
              title: "康乃馨",
              imgUrl: require("../assets/home/demo3c.png")
            }, {
              title: "康乃馨",
              imgUrl: require("../assets/home/demo3c.png")
            }, {
              title: "康乃馨",
              imgUrl: require("../assets/home/demo3c.png")
            }, {
              title: "康乃馨",
              imgUrl: require("../assets/home/demo3c.png")
            },
          ]
        }
      ]
    },
    {
      name: "郁金香",
      mainImgUrl: require("@/assets/image/home/test10.png"),
      list: [
        {
          title: "家用电器",
          productList: [
            {
              title: "郁金香",
              imgUrl: require("../assets/home/demo10.png")
            },
              {
              title: "郁金香",
              imgUrl: require("../assets/home/demo10.png")
            },
              {
              title: "郁金香",
              imgUrl: require("../assets/home/demo10.png")
            },

              {
              title: "郁金香",
              imgUrl: require("../assets/home/demo10.png")
            },
              {
              title: "郁金香",
              imgUrl: require("../assets/home/demo10.png")
            },
              {
              title: "郁金香",
              imgUrl: require("../assets/home/demo10.png")
            },
              {
              title: "郁金香",
              imgUrl: require("../assets/home/demo10.png")
            },
              {
              title: "郁金香",
              imgUrl: require("../assets/home/demo10.png")
            },

              {
              title: "郁金香",
              imgUrl: require("../assets/home/demo10.png")
            },
          ]
        }
      ]
    },
    {
      name: "薰衣草",
      mainImgUrl: require("@/assets/image/home/test11.png"),
      list: [
        {
          title: "美妆护肤",
          productList: [
            {
              title: "薰衣草",
              imgUrl: require("../assets/home/demo10a.png")
            },
             {
              title: "薰衣草",
              imgUrl: require("../assets/home/demo10a.png")
            },

             {
              title: "薰衣草",
              imgUrl: require("../assets/home/demo10a.png")
            },
             {
              title: "薰衣草",
              imgUrl: require("../assets/home/demo10a.png")
            },
             {
              title: "薰衣草",
              imgUrl: require("../assets/home/demo10a.png")
            },
             {
              title: "薰衣草",
              imgUrl: require("../assets/home/demo10a.png")
            },
             {
              title: "薰衣草",
              imgUrl: require("../assets/home/demo10a.png")
            },

             {
              title: "薰衣草",
              imgUrl: require("../assets/home/demo10a.png")
            }, {
              title: "薰衣草",
              imgUrl: require("../assets/home/demo10a.png")
            },

             {
              title: "薰衣草",
              imgUrl: require("../assets/home/demo10a.png")
            },
             {
              title: "薰衣草",
              imgUrl: require("../assets/home/demo10a.png")
            },
          ]
        }
      ]
    },
    {
      name: "向日葵",
      mainImgUrl: "",
      list: [
        {
          title: "钟表珠宝",
          productList: [
            {
              title: "向日葵",
              imgUrl: require("../assets/home/demo11.png")
            },
             {
              title: "向日葵",
              imgUrl: require("../assets/home/demo11.png")
            },

             {
              title: "向日葵",
              imgUrl: require("../assets/home/demo11.png")
            },
             {
              title: "向日葵",
              imgUrl: require("../assets/home/demo11.png")
            },
             {
              title: "向日葵",
              imgUrl: require("../assets/home/demo11.png")
            },
             {
              title: "向日葵",
              imgUrl: require("../assets/home/demo11.png")
            },

             {
              title: "向日葵",
              imgUrl: require("../assets/home/demo11.png")
            },
             {
              title: "向日葵",
              imgUrl: require("../assets/home/demo11.png")
            },
             {
              title: "向日葵",
              imgUrl: require("../assets/home/demo11.png")
            },
             {
              title: "向日葵",
              imgUrl: require("../assets/home/demo11.png")
            }, {
              title: "向日葵",
              imgUrl: require("../assets/home/demo11.png")
            }, {
              title: "向日葵",
              imgUrl: require("../assets/home/demo11.png")
            }, {
              title: "向日葵",
              imgUrl: require("../assets/home/demo11.png")
            }, {
              title: "向日葵",
              imgUrl: require("../assets/home/demo11.png")
            }, {
              title: "向日葵",
              imgUrl: require("../assets/home/demo11.png")
            }, {
              title: "向日葵",
              imgUrl: require("../assets/home/demo11.png")
            }, {
              title: "向日葵",
              imgUrl: require("../assets/home/demo11.png")
            },
          ]
        }
      ]
    }
  ]
};
// 推荐
const recommend = {
  status: "1",
  data: [
    {
      id: 0,
      imgUrl: require("@/assets/image/classifyNursing/运动装备-1.png"),
      storeName: "Nike旗舰店",
      itemTitle: "运动装备",
      itemPrice: "$248",
      itemCount: "月销:888"
    },
    {
      id: 0,
      imgUrl: require("@/assets/image/classifyNursing/美妆-1.png"),
      storeName: "美妆旗舰店",
      itemTitle: "美妆",
      itemPrice: "$248",
      itemCount: "月销:888"
    },
    {
      id: 0,
      imgUrl: require("@/assets/image/classifyNursing/护理-1.png"),
      storeName: "护理旗舰店",
      itemTitle: "护理",
      itemPrice: "$248",
      itemCount: "月销:888"
    },
    {
      id: 0,
      imgUrl: require("@/assets/image/classifyNursing/商品详情1-1.png"),
      storeName: "旗舰店",
      itemTitle: "运动装备",
      itemPrice: "$248",
      itemCount: "月销:888"
    },
    {
      id: 0,
      imgUrl: require("@/assets/image/classifyNursing/钟表-2.png"),
      storeName: "钟表旗舰店",
      itemTitle: "钟表",
      itemPrice: "$248",
      itemCount: "月销:888"
    },
    {
      id: 0,
      imgUrl: require("@/assets/image/classifyNursing/手表-3.png"),
      storeName: "手表旗舰店",
      itemTitle: "手表",
      itemPrice: "$248",
      itemCount: "月销:888"
    },
    {
      id: 0,
      imgUrl: require("@/assets/image/classifyNursing/运动装备-10.png"),
      storeName: "运动装备旗舰店",
      itemTitle: "运动装备",
      itemPrice: "$248",
      itemCount: "月销:888"
    },
    {
      id: 0,
      imgUrl: require("@/assets/image/classifyNursing/男鞋2.png"),
      storeName: "男鞋旗舰店",
      itemTitle: "男鞋",
      itemPrice: "$248",
      itemCount: "月销:888"
    },
    {
      id: 0,
      imgUrl: require("@/assets/image/classifyNursing/运动装备-1.png"),
      storeName: "运动装备旗舰店",
      itemTitle: "运动装备",
      itemPrice: "$248",
      itemCount: "月销:888"
    },
    {
      id: 0,
      imgUrl: require("@/assets/image/classifyNursing/男鞋4.png"),
      storeName: "男鞋旗舰店",
      itemTitle: "男鞋",
      itemPrice: "$248",
      itemCount: "月销:888"
    },
    {
      id: 0,
      imgUrl: require("@/assets/image/classifyNursing/水杯1.png"),
      storeName: "水杯旗舰店",
      itemTitle: "水杯",
      itemPrice: "$248",
      itemCount: "月销:888"
    }
  ]
};

const remderImg = {
  status: "1",
  productImages: [
    [
      {
        imgUrl:
          "//img13.360buyimg.com/focus/s140x140_jfs/t11071/195/2462134264/9117/cd0688bf/5a17ba79N18b9f3d4.png",
        categoryId: 100008
      },
      {
        imgUrl:
          "//img30.360buyimg.com/focus/s140x140_jfs/t11155/36/2330310765/10690/eb6754c3/5a17ba96N49561fea.png",
        categoryId: 100008
      },
      {
        imgUrl:
          "//img10.360buyimg.com/focus/s140x140_jfs/t11503/241/2246064496/4783/cea2850e/5a169216N0701c7f1.jpg",
        categoryId: 100014
      },
      {
        imgUrl:
          "//img30.360buyimg.com/focus/s140x140_jfs/t18955/187/1309277884/11517/fe100782/5ac48d27N3f5bb821.jpg",
        categoryId: 100017
      },
      {
        imgUrl:
          "//img20.360buyimg.com/focus/s140x140_jfs/t12022/66/917351804/2257/7ddc58e5/5a169232Ndf76f53c.jpg",
        categoryId: 100047
      }
    ],
    [
      {
        imgUrl: require("@/assets/image/classifyNursing/水杯0.png"),
        categoryId: 100008
      },
      {
        imgUrl: require("@/assets/image/classifyNursing/水杯1.png"),
        categoryId: 100008
      },
      {
        imgUrl: require("@/assets/image/classifyNursing/水杯2.png"),
        categoryId: 100014
      },
      {
        imgUrl: require("@/assets/image/classifyNursing/水杯3.png"),
        categoryId: 100017
      },
      {
        imgUrl: require("@/assets/image/classifyNursing/水杯4.png"),
        categoryId: 100047
      }
    ],
    [
      {
        imgUrl: require("@/assets/image/classifyNursing/男鞋1.png"),
        categoryId: 100008
      },
      {
        imgUrl: require("@/assets/image/classifyNursing/男鞋2.png"),
        categoryId: 100014
      },
      {
        imgUrl: require("@/assets/image/classifyNursing/男鞋3.png"),
        categoryId: 100017
      },
      {
        imgUrl: require("@/assets/image/classifyNursing/男鞋4.png"),
        categoryId: 100047
      }
    ],
    [
      {
        imgUrl: require("@/assets/image/classifyNursing/美妆-1.png"),
        categoryId: 100008
      },
      {
        imgUrl: require("@/assets/image/classifyNursing/美妆-2.png"),
        categoryId: 100016
      },
      {
        imgUrl: require("@/assets/image/classifyNursing/美妆-3.png"),
        categoryId: 100035
      },
      {
        imgUrl: require("@/assets/image/classifyNursing/美妆-4.png"),
        categoryId: 100016
      },
      {
        imgUrl: require("@/assets/image/classifyNursing/美妆-5.png"),
        categoryId: 100016
      },
      {
        imgUrl: require("@/assets/image/classifyNursing/美妆-6.png"),
        categoryId: 100016
      }
    ],
    [
      {
        imgUrl: require("@/assets/image/classifyNursing/美妆-7.png"),
        categoryId: 100016
      },
      {
        imgUrl: require("@/assets/image/classifyNursing/美妆-8.png"),
        categoryId: 100035
      },
      {
        imgUrl: require("@/assets/image/classifyNursing/美妆-9.png"),
        categoryId: 100016
      },
      {
        imgUrl: require("@/assets/image/classifyNursing/美妆-10.png"),
        categoryId: 100016
      },
      {
        imgUrl: require("@/assets/image/classifyNursing/美妆-11.png"),
        categoryId: 100016
      }
    ],
    [
      {
        imgUrl: require("@/assets/image/home/test1.png"),
        categoryId: 100008
      },
      {
        imgUrl: require("@/assets/image/home/test2.png"),
        categoryId: 100016
      },
      {
        imgUrl: require("@/assets/image/home/test3.png"),
        categoryId: 100035
      },
      {
        imgUrl: require("@/assets/image/home/test4.png"),
        categoryId: 100016
      }
    ]
  ]
};

Mock.mock("http://test.happymmall.com/home/remderImg", remderImg); // 推荐页面mock数据
Mock.mock("http://test.happymmall.com/home/recommend", recommend); // 推荐页面mock数据
Mock.mock("http://test.happymmall.com/home/homeData", homeData);
Mock.mock("http://test.happymmall.com/search/hot", hotData);
Mock.mock("http://test.happymmall.com/category/categoryData", categoryData);

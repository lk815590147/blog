<template>
  <div>
    <form class="case" style="margin-left:10px;">
      <div class="case-con01">
        <span class="star">*</span>
        <input type="text" placeholder="您的名字" class="text" />
        <span class="star">*</span>
        <!-- <select name id class="select">
          <option value="1">国内</option>
          <option value="2">海外</option>
        </select>-->
        <div style="width:190px">
          <div class="selection-component">
            <div class="selection-show" @click="toggleDrop">
              <input type="text" v-model="select" :placeholder="selections[0]" class="text"/>
              <div class="arrow">></div>
            </div>
            <div class="selection-list" v-if="isDrop">
              <ul>
                <li
                  v-for="(item, index) in selections"
                  @click="chooseSelection(item)"
                  :key="index"
                >{{ item }}</li>
              </ul>
            </div>
          </div>
        </div>
        <span class="star">*</span>
        <input type="text" placeholder="您的手机号码" class="text" />
        <span class="star">*</span>
        <input type="email" placeholder="您的邮箱" class="text" />

        <input type="button" value="发送" class="btn" />
      </div>

      <div class="case-con02">
        <span class="star2">*</span>
        <input type="text" placeholder="您的公司名称" class="text2" />
        <span class="star2">*</span>
        <select name id class="select2">
          <option value="1">北京</option>
          <option value="2">海外</option>
        </select>

        <span class="star2">*</span>
        <select name id class="select2">
          <option value="1">民事</option>
          <option value="2">海外</option>
        </select>
        <div class="textarea">
          <span class="star2 sub">*</span>
          <textarea name id cols="30" rows="10" placeholder="案例概述"></textarea>
        </div>
      </div>

      <div class="content">
        <div class="subcontent">
          <p class="one">广东宏安信律师事务所</p>
          <p>联系地址：广州市越秀区仓边路83号</p>
          <p>联系方式：020-83849409</p>
          <p>全国免费咨询电话：400 626 6261</p>
          <p>
            <!-- <img src="../../assets/wx-code.png" alt /> -->
          </p>
        </div>
      </div>
    </form>
  </div>
</template>


<script>
export default {
  name: "Case",
  data() {
    return {
      isDrop: false,
      select: "",
      nowIndex: 0,
      selections: [
        "哈哈",
        "嘻嘻嘻",
        "哈哈哈",
        "嘻嘻嘻",
        "哈哈哈",
        "嘻嘻嘻",
        "哈哈哈",
        "嘻嘻嘻",
        "哈哈哈",
        "嘻嘻嘻",
        "哈哈哈"
      ]
    };
  },
  methods: {
    toggleDrop() {
      this.isDrop = !this.isDrop;
    },
    chooseSelection(item) {
      this.isDrop = false;
      this.select = item;
    }
  }
};
</script>


<style lang="less" scoped>
.case {
  display: flex;
  .case-con01 {
    width: 380px;
    float: left;

    .star {
      color: red;
    }
    .text {
      width: 346px;
      height: 47px;
      margin-bottom: 33px;
      padding-left: 15px;
    }
    .select {
      width: 363px;
      height: 47 px;
      margin-bottom: 33px;
      padding: 10px;
    }
    .btn {
      width: 360px;
      height: 48px;
      background-color: #4e8bff;
      border-style: none;
      outline: none;
      cursor: pointer;
      color: #fff;
      font-size: 16px;
      margin: 7px 0 0 10px;
    }
    .selection-component {
      width: 361px;
      height: 57px;
      .selection-show {
        width: 160px;
        position: relative;
        .arrow {
          position: absolute;
          width: 10px;
          right: 0;
          top: 0;
        }
      }
      .selection-list {
        border: 1px solid #ccc;
        background: #666;
        width: 173px;
        position: absolute;
        z-index: 99999;
        ul {
          padding: 0;
          margin: 0;
          height: 200px;
          overflow: auto;
          li {
            list-style: none;
            &:hover {
              background: #ccc;
            }
          }
        }
      }
    }
  }
  .case-con02 {
    width: 375px;
    margin-right: 20px;
    margin-left: 60px;

    float: left;
    .star2 {
      color: red;
    }

    .text2 {
      width: 346px;
      height: 47px;
      margin-bottom: 30px;
      padding-left: 15px;
    }
    .select2 {
      width: 363px;
      height: 47px;
      margin-bottom: 30px;
      padding: 10px;
    }
    textarea {
      resize: none;
      height: 120px;
      width: 345px;
      padding: 10px;
    }
    .textarea {
      height: 162px;
      // width: 350px;
      position: relative;
      float: right;
    }
    .sub {
      position: absolute;
      top: 20px;
      left: -10px;
    }
  }
  input[type="text"],
  input[type="email"],
  textarea,
  select {
    border: 1px solid #f0efef;
    color: #6e6e6e;
  }
  .content {
    width: 321px;
    height: 427px;
    .subcontent {
      .one {
        margin: 0 0 36px 20px;
      }
      p {
        color: #666;
        margin: 20px 0 36px 20px;
        font-size: 16px;
      }
    }
  }
}
</style>



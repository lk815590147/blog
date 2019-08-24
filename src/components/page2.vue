<template>
  <div>
    <div class="page" v-show="show">
      <div class="pagelist">
        <span style="margin-right:12px" class="shou">共{{ pages }}页</span>
        <span class="jump" @click="current_page=1">&lt;&lt;首页</span>
        <span class="jump" v-show="current_page>1" @click="reduce">&lt;</span>
        <span class="ellipsis" v-show="efont">...</span>
        <span
          class="jump"
          v-for="num in indexs"
          :class="{bgprimary:current_page==num}"
          @click="jumpPage(num)"
        >{{num}}</span>
        <span class="ellipsis" v-show="efont&&current_page<pages-4">...</span>

        <span class="jump" @click="add">&gt;</span>
        <span v-show="current_page<pages-1" class="jump" @click="jumpPage(pages)">末页&gt;&gt;</span>

        <span class="tiao">
          <span class="jumppoint">跳至</span>
          <span class="jumpinp">
            <input type="text" v-model="changePage" @keyup.enter="jumpPage(changePage)" />
          </span>
          <span style="margin-left:15px;">页</span>
        </span>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      current_page: 1, //当前页
      pages: 20, //总页数
      changePage: "", //跳转页
      nowIndex: 0
    };
  },
  computed: {
    show: function() {
      return this.pages && this.pages != 1;
    },
    efont: function() {
      if (this.pages <= 7) return false;
      return this.current_page > 5;
    },
    indexs: function() {
      var left = 1,
        right = this.pages,
        ar = [];
      if (this.pages >= 7) {
        if (this.current_page > 5 && this.current_page < this.pages - 4) {
          left = Number(this.current_page) - 3;
          right = Number(this.current_page) + 3;
        } else {
          if (this.current_page <= 5) {
            left = 1;
            right = 7;
          } else {
            right = this.pages;

            left = this.pages - 6;
          }
        }
      }
      while (left <= right) {
        ar.push(left);
        left++;
      }
      return ar;
    }
  },
  methods: {
    add() {
      this.current_page++;
    },
    reduce() {
      this.current_page--;
    },
    jumpPage: function(id) {
      this.current_page = id;
    }
  }
};
</script>

<style lang="less" scoped>
.page {
  font-weight: 900;
  height: 40px;
  text-align: center;
  color: #888;
  margin: 20px auto 0;
  .pagelist {
    box-sizing: border-box;
    font-size: 0;
    background: #fff;
    height: 50px;
    span {
      font-size: 16px;
    }
    .jump {
      border: 1px solid #ccc;
      padding: 6px 12px;
      -webkit-border-radius: 4px;
      -moz-border-radius: 4px;
      border-radius: 4px;
      cursor: pointer;
      margin-left: 5px;
    }
    .bgprimary {
      cursor: default;
      color: #666666;
      background: #eff0f8;
      border-color: #eff0f8;
    }
  }
  .jumpinp input {
    width: 55px;
    height: 26px;
    font-size: 13px;
    border: 1px solid #ccc;
    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    border-radius: 4px;
    text-align: center;
  }
  .ellipsis {
    padding: 0px 8px;
  }
  .bgprimary {
    cursor: default;
    color: #666666;
    background: #eff0f8;
    border-color: #eff0f8;
  }
  .jumppoint {
    margin-left: 15px;
    margin-right: 15px;
  }
}

// @media screen and(max-width: 768px) {
//   .PagePhone768px;
// }
</style>


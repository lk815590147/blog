<template>
  <div class="date">
    <el-date-picker v-model="$store.state.date" type="date" placeholder="请设置您的生日"></el-date-picker>
    <!-- <svg class="icon" aria-hidden="true">
        <use xlink:href="#iconrili" />
    </svg>-->
    <!-- <input type="button" value="提交" @click="send"> -->
  </div>
</template>


<script>
// import { log } from "util";
export default {
  name: "Date",
  data() {
    return {
      pickerOptions: {
        disabledDate(time) {
          return time.getTime() > Date.now();
        },
        shortcuts: [
          {
            text: "今天",
            onClick(picker) {
              picker.$emit("pick", new Date());
            }
          },
          {
            text: "昨天",
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit("pick", date);
            }
          },
          {
            text: "一周前",
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit("pick", date);
            }
          }
        ]
      },
      date: ""
    };
  },
  props: ["date2"],
  watch: {
    date: function(newVal, oldVal) {
      this.$emit("date", this.date);
      console.log(this.date);
    }
  },
  methods: {
    send(){
      this.date=""
    }
  },
  created() {
    console.log(this.date2);
  },
  mounted() {
    // this.date = this.date2;
    // console.log(this.date);
  }
};
</script>

<style lang="less" >
.date {
  position: relative;
  width: 500px;
  .el-input {
    //   border: @border-style-base @border-width-base @border-color !important;
    width: 100%;
    //   height: @input-height-large;
    background-color: #fff;
    border-radius: 4px;
    margin-bottom: 20px;
    color: #333333;
    .el-input__inner {
      // height: @input-height-base !important;
      padding-left: 20px;
      padding-top: 5px;
    }
    .el-icon-date:before {
      content: "";
    }
    .el-input__icon:before {
      content: "";
    }
  }
  .el-icon-d-arrow-left:before {
    content: "";
  }
  .icon {
    position: absolute;
    top: 8px;
    right: 12px;
    width: 20px;
    height: 20px;
    color: #b8bcd6;
  }
}
@media screen and (max-width: 768px) {
  .date {
    position: relative;
    width: 100%;
    .el-input {
      width: 100%;
      height: 36px;
    }
  }
}
</style>


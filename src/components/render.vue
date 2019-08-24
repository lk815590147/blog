<script>
export default {
  render: function(createElement) {
    return createElement(
      // 顶部的便签
      "div",
      {
        // 挂载的class
        class: {
          child: true,
          more: false
        },
        // 相当于便签上直接写的属性,，如果要使用src，就直接写src
        attrs: {
          id: "foo",
          name: "child"
        },
        // 挂载在便签上的style
        style: {
          width: "100%",
          height: "50px"
        }
      },
      // []中阔号代表的是子标签
      [
        createElement(
          // 便签的名字
          "h1",
          {
            // 挂载在便签上的class
            class: "text"
          },
          // 便签的值
          "标题"
        ),
        createElement(
          "h2",
          {
            attrs: {
              id: "xixixi"
            },
            class: "more",
            style: {
              width: "100%",
              height: "50px"
            }
          },
          "你猜"
        ),
        createElement(
          "p",this.childinput
        ),
        createElement("input", {
          attrs: {
            id: "2",
            name: "哈哈哈",
            placeholder: this.childinput,
            // 在表格中显示的值
            value:this.childinput,
            ref: "lk"
          },
          style: {
            width: "100%"
          },
          on: {
            input: event => {
              // 可以拿到event.target.value，input便签上的值
              // console.log(event.target.value);
              this.childinput = event.target.value;
              // console.log(event.target.id);
              // console.log(event.target.name);
              // console.log(event.target.style);
              // console.log(event.target.placeholder);
            }
          }
        }),
        createElement("div"),
        createElement(
          "button",
          {
            on: {
              click: () => {
                console.log(this.childinput);
              }
            }
          },
          "按钮"
        )
      ]
    );
  },
  data() {
    return {
      childinput: "childinput"
    };
  },
  watch: {
    childinput: function(event) {
      // console.log(this.childinput);
    }
  }
};
</script>


<style lang="less" scoped>
.child {
  background: pink;
  box-sizing: border-box;
}
.more {
  background: red;
}
.text {
  text-align: center;
}
</style>
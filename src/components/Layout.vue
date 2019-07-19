<template>
  <div>
    <!-- <div class="img-container">
      <img src="../img/00.jpg" alt />
      <img src="../img/00.jpg" alt />
    </div>-->
    <!-- <p>
      <span>名字长点很拉风</span>
    </p>-->
    <!-- <div class="div-container">
      <div></div>
      <div></div>
      <div></div>
    </div>-->

    <ul class="nav">
      <li>
        <a href>Home</a>
      </li>
      <li>
        <a href>About Me</a>
      </li>
      <li>
        <a href>Portfolio</a>
      </li>
      <li>
        <a href>Blog</a>
      </li>
      <li>
        <a href>Resources</a>
      </li>
      <li>
        <a href>Contact Me</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>


<style lang="less" scoped>
.nav {
  width: 560px;
  height: 50px;
  margin: 20px auto;
  background: #f65f57;
  border-radius: 10px;
  box-shadow: 10px 10px 10px #ccc;
  background-image: linear-gradient(to top left, yellow, #f65f57);
  a {
    display: inline-block;
    transition: all 0.2s ease-in;
    line-height: 50px;
  }
  a:hover {
    transform: rotate(10deg);
  }
  li {
    position: relative;
    display: inline-block;
    padding: 0 16px;
    font-size: 13px;
    text-shadow: 1px 2px 4px rgba(0, 0, 0, 0.5);
    list-style: none outside none;
  }
  li::before,
  .nav li::after {
    content: "";
    position: absolute;
    top: 14px;
    height: 25px;
    width: 1px;
  }
  li::after {
    right: 0;
    /* -moz-是代表火狐 */
    background: -moz-linear-gradient(
      top,
      rgba(255, 255, 255, 0),
      rgba(255, 255, 255, 0.2) 50%,
      rgba(255, 255, 255, 0)
    );
    /* -webkit是代表谷歌和safa'ri */
    background: -webkit-linear-gradient(
      top,
      rgba(255, 255, 255, 0),
      rgba(255, 255, 255, 0.2) 50%,
      rgba(255, 255, 255, 0)
    );
    /* -o-是代表opera */
    background: -o-linear-gradient(
      top,
      rgba(255, 255, 255, 0),
      rgba(255, 255, 255, 0.2) 50%,
      rgba(255, 255, 255, 0)
    );
    /* -ms-是代表IE */
    background: -ms-linear-gradient(
      top,
      rgba(255, 255, 255, 0),
      rgba(255, 255, 255, 0.2) 50%,
      rgba(255, 255, 255, 0)
    );
    background: linear-gradient(
      top,
      rgba(255, 255, 255, 0),
      rgba(255, 255, 255, 0.2) 50%,
      rgba(255, 255, 255, 0)
    );
  }
  li::before {
    left: 0;
    background: -moz-linear-gradient(top, #ff625a, #9e3e3a 50%, #ff625a);
    background: -webkit-linear-gradient(top, #ff625a, #9e3e3a 50%, #ff625a);
    background: -o-linear-gradient(top, #ff625a, #9e3e3a 50%, #ff625a);
    background: -ms-linear-gradient(top, #ff625a, #9e3e3a 50%, #ff625a);
    background: linear-gradient(top, #ff625a, #9e3e3a 50%, #ff625a);
  }
  li:first-child::before {
    background: none;
  }
  li:last-child::after {
    background: none;
  }
  a,
  .nav a:hover {
    color: #fff;
    text-decoration: none;
  }
}
// .layout {
//   width: 200px;
//   height: 200px;
// }
// .div-container {
//   //   width: 800px;
//   display: flex;
//   //   justify-content: space-between;  //左右和中间
//   justify-content: center; //居中
//   align-items: center;
//   //   margin: 20px auto;
//   //   flex-direction: column;

//   div:nth-of-type(1) {
//     .layout();
//     background-color: red;
//   }
//   div:nth-last-of-type(2) {
//     .layout();
//     background-color: aqua;
//   }
//   div:nth-of-type(3) {
//     .layout();
//     background-color: antiquewhite;
//   }
// }

// @mainColor: aqua;
// .img-container {
//   text-align: center;
//   margin: 20px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   img {
//     width: 500px;
//     height: 200px;
//     margin-left:20px;
//   }
// }
// p {
//   text-align: center;
//   span {
//     color: @mainColor;
//   }
// }
</style>



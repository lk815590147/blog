<template>
    <div class="text">
        <p v-html="s" >
        </p>
    </div>
</template>

<script>
export default {
  data() {
    return {
      a:'<p style="line-height: 1.75em; text-align: justify;"><span style="color: rgb(89, 89, 89);">       广东宏安信律师事务所于1997年成立，是由广东司法厅批准成立的与国际惯例接轨的合伙制律师事务所。本所拥有近百名优秀的法律服务人员、现代化的办公场所和设施、规范完善的管理体系，是一家现代化的律师事务所。</span><p style="line-height: 1.75em; text-align: justify;"><span style="color: rgb(89, 89, 89);"><br/></span><p style="line-height: 1.75em; text-align: justify;"><span style="color: rgb(89, 89, 89);">       本所现任合伙人是童建华律师、梁明辉律师、童鸿飞律师、吴学明律师，均是执业多年，具有丰富经营的资深律师。事务所主任是童建华律师，现任广州市第七届律师代表大会律师代表、广东省政协特聘委员(是广东省律师界中唯一的一位受特聘于省政协社会和法制委员会委员的律师)、市政协法制工作顾问、广州市公安局指挥中心法律顾问。童建华律师执业至今已有十数年，擅长办理重大疑难案件，在办理刑事案件及商业案件上都有较大成就，曾承办“大富豪”张子强绑架勒索、走私武器、弹药案及湛江（9898）特大走私案，在海内外有较高知名度。</span><p style="line-height: 1.75em;"><br/><p style="line-height: 1.75em;"><img src="https://www.honganxin.com/UploadFile/UEditor/image/20190212/6368556440444815905091298.jpg" title="配图1.jpg" alt="配图1.jpg" style="width: 553px; height:342px"/><p style="line-height: 1.75em;"><br/><p style="line-height: 1.75em; text-align: justify;"><span style="color: rgb(89, 89, 89);">       本所现有律师30人，律师助理及法律辅助人员50余人，并有高级顾问十多名，丰富的人力资源优势成为本所的最大特色。本所的高级法律顾问主要来自原公、检、法系统、国土房地产部门、工商部门、金融系统及工程造价部门的离退休领导干部。我所聘请的主要高级顾问有：原广东省高院刑二庭（经济犯罪审判庭）庭长、原广州市中级人民法院房地产庭副庭长，原市房管局产权处副处长、原房改办处长、原广州市公安局经侦处副处长、原广州市某区工商局经检处处长、广东省建设工程造价管理总站高级顾问、番禺市法制办负责人等。因此，我所在提供公司法律服务和代理经济纠纷案件方面具有得天独厚的优势。</span><p style="line-height: 1.75em; text-align: justify;"><span style="color: rgb(89, 89, 89);"><br/></span><p style="line-height: 1.75em; text-align: justify;"><span style="color: rgb(89, 89, 89);">        本所的组织形式为合伙制律师事务所。最高领导机构是合伙人会议，下设法律事务中心、按揭事务中心、行政部三大部门。法律事务中心是本所的核心业务部门，主要从事各类诉讼、非诉讼的法律事务，按律师的专业特长并结合市场的需求划分不同的专业部门，大大加强了法律服务的专业深度。按揭事务中心是本所的重要业务部门，主要从事房地产及金融法律事务。行政部是强化事务所管理、打造事务所品牌、为事务所各业务部门提供良好的后台服务的管理机构。</span><p style="line-height: 1.75em; text-align: justify;"><span style="color: rgb(89, 89, 89);"><br/></span><p style="line-height: 1.75em; text-align: justify;"><span style="color: rgb(89, 89, 89);"><img src="https://www.honganxin.com/UploadFile/UEditor/image/20190212/6368556442151608176379522.jpg" title="配图2.jpg" alt="配图2.jpg" style="width: 553px; height:642px"/></span><p style="line-height: 1.75em; text-align: justify;"><span style="color: rgb(89, 89, 89);"><br/></span><br/>',
      b: '/<IMG src="([^"]*?)">/gi',
      s: "",
      regexp:'/\w+(<\s*img\s*[^>]*>)\w+(<\s*img\s*[^>]*>)\w+/g',
      h:'<img\\s*([\\w]*=(\"|\')([^\"\']*)(\"|\')\\s*)*/>',
      str:"Mr Blue has a blue house and a blue car"
    };
  },
  created() {
    this.getAbout();
  },
  methods: {
    getAbout() {
      console.log(this.a);
      this.s=this.a.replace(/<\/?img[^>]*>/g,"");
      console.log(this.s);
      }
    }
};
</script>


<style lang="less" scoped>
.text{
   p{
       font-size: 20px;
       color: red;
   }
}
</style>



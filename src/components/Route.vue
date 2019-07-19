<template>
  <div>
    <router-link to="/tran">来吧</router-link>

    <ul v-for="(item,index) in pcState" :key="item.index" v-if="index%2==0">
      <li>{{item.name}}</li>
      <li>{{item.state}}</li>
      <li>{{item.ip}}</li>
      <li>{{item.canCPU}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pcState: [
        {
          name: "abc",
          state: "on",
          ip: "192.168.0.1",
          canCpu: "8"
        },
        {
          name: "dce",
          state: "on",
          ip: "192.168.0.2",
          canCpu: "18"
        },
        {
          name: "asdf",
          state: "on",
          ip: "192.168.0.3",
          canCpu: "8"
        }
      ]
    };
  },
  mounted() {
    this.getIndex();
  },
  methods: {
    getIndex(index) {
      console.log(index);
    }
  }
};
</script>

<style lang="less" scoped>
div {
  list-style: none;
}
@main: red;
p {
  color: @main;
}
</style>



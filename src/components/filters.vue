<template>
  <div>
    <p>{{ message|capitalize }}</p>
  </div>
</template>


<script>
export default {
  data() {
    return {
       message:'join' 
    };
  },
  methods: {},
  filters: {
    capitalize: function(value) {
      if (!value) return "";
      value = value.toString();
      console.log(value);
      return value.charAt(0).toUpperCase() + value.slice(1);
    }
  }
};
</script>

<style lang="less" scoped>
</style>



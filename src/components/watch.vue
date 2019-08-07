<template>
  <div>
    <p>FullName: {{fullName}}</p>
    <p>
      FirstName:
      <input type="text" v-model="firstName" />
    </p>
  </div>
</template>

<style lang="less" scoped>
</style>

<script>
export default {
  data() {
    return {
      firstName: "Dawei",
      lastName: "Lou",
      fullName: ""
    };
  },
  watch: {
    firstName(newName, oldName) {
      this.fullName = newName + " " + this.lastName+" "+this.oldName;
      console.log(oldName);
    }
  }
};
</script>



<template>
  <div class="default-table-head">
    <table cellspacing="0" cellpadding="0" border="0">
      <colgroup>
        <col
          v-for="(item, index) in columns"
          :key="index"
          :width="item.width ? item.width : 'auto'"
        />
      </colgroup>
      <thead>
        <tr ref="headTr">
          <th
            v-for="(item, index) in columns"
            :key="index"
            :style="{
              textAlign: item.align ? item.align : 'left',
            }"
          >
            <label
              class="checkbox-label"
              :class="{ 'is-checked': selectAll }"
              v-if="item.type && item.type === 'selection'"
            >
              <span class="checkbox-input">
                <span class="checkbox-inner"></span>
                <input
                  type="checkbox"
                  class="checkbox-original"
                  :checked="selectAll"
                  @change="toggleAllSelection($event)"
                />
              </span>
            </label>

            <span v-if="!item.type">{{item.title}}</span>
          </th>
        </tr>
      </thead>
    </table>
  </div>
</template>

<script>
export default {
  name: "TableHead",
  props: {
    columns: Array,
    selectAll: Boolean,
  },
  data() {
    return {
      isChecked: false,
    }
  },
  methods: {
    toggleAllSelection (e) {
      this.$emit('toggleAllSelection', e.target.checked);
    }
  }
};
</script>

<style scoped>
.default-table-head {
  border: 1px solid #d6d9e9;
  box-sizing: border-box;
  border-radius: 4px;
  margin-bottom: 9px;
  height: 60px;
}
.default-table-head table,
.default-table-head thead,
.default-table-head tr,
.default-table-head th {
  height: 60px;
  box-sizing: border-box;
}
.default-table-head table,
.default-table-head thead,
.default-table-head tr {
  width: 100%;
}
.default-table-head table {
  table-layout: fixed;
}
.default-table-head th {
  vertical-align: middle;
  overflow: hidden;
}
.default-table-head tr {
  border-radius: 4px;
  font-size: 16px;
  color: #637aef;
  font-weight: normal;
  font-family: MicrosoftYaHei-Bold;
}

/* checkbox */
.checkbox-label {
  color: #606266;
  font-weight: 500;
  font-size: 14px;
  position: relative;
  cursor: pointer;
  display: inline-block;
  white-space: nowrap;
  user-select: none;
}
.checkbox-input {
  white-space: nowrap;
  cursor: pointer;
  outline: none;
  display: inline-block;
  line-height: 1;
  position: relative;
  vertical-align: middle;
}
.checkbox-original {
  opacity: 0;
  outline: none;
  position: absolute;
  margin: 0;
  width: 0;
  height: 0;
  z-index: -1;
}
.checkbox-inner {
  display: inline-block;
  position: relative;
  border: 1px solid #dcdfe6;
  border-radius: 2px;
  box-sizing: border-box;
  width: 20px;
  height: 20px;
  background-color: #fff;
  top: 50%;
  z-index: 1;
  transition: border-color 0.25s cubic-bezier(0.71, -0.46, 0.29, 1.46),
    background-color 0.25s cubic-bezier(0.71, -0.46, 0.29, 1.46);
  cursor: pointer;
}
.checkbox-inner::after {
  box-sizing: content-box;
  content: "";
  border: 3px solid #fff;
  border-left: 0;
  border-top: 0;
  height: 9px;
  width: 5px;
  left: 4px;
  position: absolute;
  top: 1px;
  left: 5px;
  transform: rotate(45deg) scaleY(0);
  transition: transform 0.15s ease-in 0.05s;
  transform-origin: center;
}
.is-checked .checkbox-inner {
  background-image: linear-gradient(90deg, #8498ff 0%, #637aef 100%),
    linear-gradient(#637aef, #637aef);
}
.is-checked .checkbox-inner::after {
  transform: rotate(45deg) scaleY(1);
}
.is-checked .checkbox-label {
  color: #409eff;
}
</style>

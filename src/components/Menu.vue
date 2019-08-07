<template>
  <div class="course-ware">
    <ul>
      <li v-for="(course,index) of courseList" class="course">
        <h3
          class="course-title title-style border-1px"
          @click="change(index)"
        >{{course.course_name}}</h3>
        <ul v-show="index==ind" >
          <li v-for="clazz in course.content">
            <h5
              class="sub-title title-style border-1px"
              @click.stop.prevent="expandClazzToggle(clazz)"
            >
              <!-- 阻止默认事件的发生  @click.stop.prevent-->
              {{clazz.class_name}}
              <span
                class="arrow-wrapper"
                :class="clazz._expanded ? 'arrow-up' : 'arrow-down'"
              ></span>
            </h5>
            <ul class="course-list" v-show="clazz._expanded">
              <li v-for="classContent in clazz.class_content" class="border-1px">{{classContent}}</li>
            </ul>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>


<script>
export default {
  data() {
    return {
      flag: false,
      ind:'-1',
      courseList: [
        {
          course_id: 1,
          course_name: "黑马营十七期",
          content: [
            {
              class_id: 1,
              class_name: "1课",
              class_content: [
                "黑马营十七期1课DAY1 第一节视频",
                "黑马营十七期1课DAY1 第二节视频",
                "黑马营十七期1课DAY1 第三节视频",
                "黑马营十七期1课DAY1 第四节视频"
              ],
              _expanded: false
            },
            {
              class_id: 2,
              class_name: "2课",
              class_content: [
                "黑马营十七期1课DAY1 第一节视频",
                "黑马营十七期1课DAY1 第二节视频",
                "黑马营十七期1课DAY1 第三节视频",
                "黑马营十七期1课DAY1 第四节视频",
                "黑马营十七期1课DAY1 第五节视频"
              ],
              _expanded: false
            }
          ]
        },
        {
          course_id: 2,
          course_name: "李竹实验室一期",
          flag: false,
          content: [
            {
              class_id: 1,
              class_name: "1课",
              class_content: [
                "李竹实验室一期1课DAY1 第一节视频",
                "李竹实验室一期2课DAY1 第二节视频",
                "李竹实验室一期3课DAY1 第三节视频",
                "李竹实验室一期4课DAY1 第四节视频"
              ],
              _expanded: false
            },
            {
              class_id: 2,
              class_name: "2课",
              class_content: [
                "李竹实验室一期1课DAY1 第一节视频",
                "李竹实验室一期2课DAY1 第二节视频",
                "李竹实验室一期3课DAY1 第三节视频",
                "李竹实验室一期4课DAY1 第四节视频",
                "李竹实验室一期5课DAY1 第五节视频"
              ],
              _expanded: false
            }
          ]
        }
      ]
    };
  },
  methods: {
    expandClazzToggle(clazz) {
      clazz._expanded = !clazz._expanded;
    },
    change(index) {
      this.ind=index
    }
  }
};
</script>

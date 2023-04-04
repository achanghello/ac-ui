<template>
  <div v-if="normal" class="ac-blogitem-small">
    <div class="ac-blogitem-small-left">
      <img
        src="https://t7.baidu.com/it/u=4162611394,4275913936&fm=193&f=GIF"
        alt=""
      />
    </div>
    <div class="ac-blogitem-small-right">
      <h3>
        <span class="fc-blue" v-if="blog.type == 0">【转载】</span>
        <span class="fc-blue" v-if="blog.type == 1">【原创】</span>
        <span class="fc-blue" v-if="blog.type == 2">【VIP原创】</span>
        {{ blog.title }}
      </h3>
      <!-- <p>{{blog}}</p> -->
      <p>{{ blog.summary }}</p>
      <div class="ac-blogitem-small-right-footer">
        <div class="left">
          <div>
            <AcTag type="success">{{ blog.tag }}</AcTag>
          </div>
          <div style="margin: 0 15px">{{ blog.author }}</div>
          <div>{{ new Date(blog.releaseTime).toLocaleString() }}</div>
        </div>
        <div class="center"></div>
        <div class="right">
          <div>点赞量:{{ blog.suki }}</div>
          <div style="margin: 0 15px">收藏量:{{ blog.collection }}</div>
          <div>查看量:{{ blog.views }}</div>
        </div>
      </div>
    </div>
  </div>

  <section v-else class="article-item zoomIn article">
        <div class="fc-flag">置顶</div>
        <h5 class="title">
            <span class="fc-blue" v-if="blog.type==0">【转载】</span>
            <span class="fc-blue" v-if="blog.type==1">【原创】</span>
            <span class="fc-blue" v-if="blog.type==2">【VIP原创】</span>
            <a href="read.html">{{blog.title}}</a>
        </h5>
        <div class="time">
            <span class="day">{{blog.releaseTime.slice(8,10)}}</span>
            <span class="month fs-18">{{blog.releaseTime.slice(5,7)}}<span class="fs-14">月</span></span>
            <span class="year fs-18 ml10">{{blog.releaseTime.slice(0,4)}}</span>
        </div>
        <div class="content" v-if="blog.summary">
            <a href="read.html" class="cover img-light">
                <img src="https://t7.baidu.com/it/u=4162611394,4275913936&fm=193&f=GIF" alt="">
            </a>
            {{ blog.summary }}
        </div>
        <div class="read-more" v-if="blog.summary">
            <a href="read.html" class="fc-black f-fwb">继续阅读</a>
        </div>
        <aside class="f-oh footer">
            <div class="f-fl tags">
                <AcTag>{{blog.tag}}</AcTag>
                <AcTag>作者:{{blog.author}}</AcTag>
                <!-- <a class="tag">作者:{{blog.author}}</a> -->
            </div>
            <div class="f-fr">
                <span class="read">
                    <i class="fa fa-eye fs-16"></i>
                    <i class="num">点赞量:{{blog.suki}}</i>
                </span>
                <span class="read">
                    <i class="fa fa-eye fs-16"></i>
                    <i class="num">收藏量:{{blog.collection}}</i>
                </span>
                <span class="read">
                    <i class="fa fa-eye fs-16"></i>
                    <i class="num">阅读量:{{blog.views}}</i>
                </span>
            </div>
        </aside>
    </section>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "AcBlogitem",
  props: {
    blog: {
      type: Object,
      default: {
        bid: 5,
        author: "黄立诚",
        type: 0,
        tag: "多选框",
        state: 1,
        releaseTime: "2022-09-07T08:27:36.000+00:00",
        suki: 1698469,
        collection: 7883,
        views: 123477,
        title: "计算机科学与技术",
        summary: "CPU",
        cover: "CgCz",
      },
    },
    normal: {
        type: Boolean,
        default: true
    }
  },
});
</script>

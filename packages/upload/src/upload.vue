<template>
    <div tabindex="0" :class="['ac-upload', `ac-upload--text`]" @click="handleClick">
        <slot class="i"></slot>
        <input class="ac-upload__input" type="file" ref="input" :name="name" @change="handleChange" :multiple="multiple"
            :accept="accept" />
    </div>
</template>
<script>
export default {
    name: "AcUpload",
    data() {
        return {
            tempIndex: 0,
            uploadFilesArr: []
            // uploadFiles:[]
        }
    },
    props: {
        name: {
            type: String,
            default: ''
        },
        multiple: {
            type: Boolean,
            default: false
        },
        accept: {
            type: String,
            default: 'image/*'
        },
        disabled: {
            type: String,
            default: false
        },
        onChange: Function,
        beforeUpload: Function,
        onSuccess: Function
    },
    methods: {
        handleClick() {
            if (!this.disabled) {
                this.$refs.input.value = null;
                this.$refs.input.click();
            }
        },
        handleChange(ev) {
            const files = ev.target.files;
            let file = files[0];
            let formData = new FormData();
            formData.append(this.name, file);

            var xhr = new XMLHttpRequest();
            xhr.open('POST', 'https://fastmock.site/mock/a6bf479aab19dd7f40fc10522cdead00/wcy/blog/uploadBlogImages', true);
            xhr.onload = () => {
                // console.log(xhr.responseText);
                if (xhr.status === 200) {
                    console.log('上传成功！');
                    // this.onSuccess(xhr.retData)
                    // console.log("阳光下", JSON.parse(xhr.responseText).retData);
                    this.onSuccess(JSON.parse(xhr.responseText).retData)
                }
            };
            xhr.send(formData);
        }
    }
}
</script>
  
<style lang="scss" scoped>

</style>
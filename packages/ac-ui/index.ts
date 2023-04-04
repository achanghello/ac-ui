import Button from "@ac-ui/button";
import Icon from "@ac-ui/icon";
import ButtonGroup from "@ac-ui/button-group";
import Col from "@ac-ui/col"
import Row from "@ac-ui/row"
import CheckBox from "@ac-ui/check-box"
import CheckBoxGroup from "@ac-ui/check-box-group"
import Radio from "@ac-ui/radio"
import RadioGroup from "@ac-ui/radio-group";
import Switch from "@ac-ui/switch";
import Tabs from "@ac-ui/tabs";
import TabPane from "@ac-ui/tab-pane";
import Message from "@ac-ui/message";
import Input from "@ac-ui/input";
import Card from "@ac-ui/card";
import { App } from "vue";
import FormItem from "@ac-ui/form-item";
import Form from "@ac-ui/form";
import Dialog from "@ac-ui/dialog";
import Drawer from "@ac-ui/drawer";
import Option from "@ac-ui/option";
import Select from "@ac-ui/select";
import Tag from "@ac-ui/tag";
import Upload from "@ac-ui/upload";
import VInfiniteScroll from "@ac-ui/v-infinite-scroll"
import Textarea from "@ac-ui/textarea";
import Blogitem from "@ac-ui/blogitem";
import Steps from "@ac-ui/steps";
// import AcDemo from "@ac-ui/demo"
import "../theme-chalk/index.scss";

const components = [
    Button,
    Icon,
    ButtonGroup,
    Col,
    Row,
    CheckBox,
    Radio,
    RadioGroup,
    CheckBoxGroup,
    Switch,
    Tabs,
    TabPane,
    Input,
    FormItem,
    Form,
    Card,
    Dialog,
    Drawer,
    Option,
    Select,
    Tag,
    Upload,
    Textarea,
    Blogitem,
    Steps,
    // AcDemo
]

const install = (app:App)=>{
    components.forEach(element => {
        app.component(element.name,element)
    });

    // 全局注册无限滚动指令
    app.use(VInfiniteScroll)
    app.config.globalProperties.$message = Message
}

export default {
    install
}
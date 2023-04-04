<template>
  <div>
    <div>
      <AcButton>Default</AcButton>
      <AcButton type="primary">Primary</AcButton>
      <AcButton type="success">Success</AcButton>
      <AcButton type="info">Info</AcButton>
      <AcButton type="warning">Warning</AcButton>
      <AcButton type="danger">Danger</AcButton>
    </div>
    <div>
      <AcButton plain>Default</AcButton>
      <AcButton plain type="primary">Primary</AcButton>
      <AcButton plain type="success">Success</AcButton>
      <AcButton plain type="info">Info</AcButton>
      <AcButton plain type="warning">Warning</AcButton>
      <AcButton plain type="danger">Danger</AcButton>
    </div>
    <div>
      <AcButton round>Default</AcButton>
      <AcButton round type="primary">Primary</AcButton>
      <AcButton round type="success">Success</AcButton>
      <AcButton round type="info">Info</AcButton>
      <AcButton round type="warning">Warning</AcButton>
      <AcButton round type="danger">Danger</AcButton>
    </div>
    <div>
      <AcButton circle icon="ac-icon-jiazai"></AcButton>
      <AcButton circle type="primary" icon="ac-icon-jiazai"></AcButton>
      <AcButton circle type="success" icon="ac-icon-jiazai"></AcButton>
      <AcButton circle type="info" icon="ac-icon-jiazai"></AcButton>
      <AcButton circle type="warning" icon="ac-icon-jiazai"></AcButton>
      <AcButton circle type="danger" icon="ac-icon-jiazai"></AcButton>
    </div>
    <div>
      <AcButton disabled>Default</AcButton>
      <AcButton disabled type="primary">Primary</AcButton>
      <AcButton disabled type="success">Success</AcButton>
      <AcButton disabled type="info">Info</AcButton>
      <AcButton disabled type="warning">Warning</AcButton>
      <AcButton disabled type="danger">Danger</AcButton>
    </div>
    <div>
        <AcButton type="primary" icon="ac-icon-jiazai"></AcButton>
        <AcButton type="danger" icon="ac-icon-jiazai">上传</AcButton>
    </div>
        <!-- <AcButton type="danger" icon="ac-icon-jiazai"></AcButton>
        <AcIcon name="jiazai"></AcIcon> -->
    <AcButtonGroup>
      <AcButton type="primary">没头脑</AcButton>
      <AcButton type="primary">不高兴</AcButton>
    </AcButtonGroup>

    <AcButtonGroup>
      <AcButton type="primary">我</AcButton>
      <AcButton type="primary">爱</AcButton>
      <AcButton type="primary">你</AcButton>
    </AcButtonGroup>

    <div>
        <AcButton type="primary" :loading="true">加载中</AcButton>
    </div>
    <AcIcon name="jiazai"></AcIcon>
    <AcRow>1111111111111111111111111111</AcRow>
    <AcCol></AcCol>
  </div>
</template>
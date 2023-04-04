<template>
    <div class="layout">
        <AcRow>
            <AcCol tag="span" :span="12">
                <div style="background:red;">1</div>
            </AcCol>
            <AcCol tag="span" :span="6">
                <div style="background:green;">1</div>
            </AcCol>
            <AcCol tag="span" :span="6">
                <div style="background:blue;">1</div>
            </AcCol>
        </AcRow>
        <AcRow :gutter="20" justify="end">
            <AcCol tag="span" :span="1">
                <div style="background:red;">1</div>
            </AcCol>
            <AcCol tag="span" :span="6">
                <div style="background:green;">1</div>
            </AcCol>
            <AcCol tag="span" :span="6">
                <div style="background:blue;">1</div>
            </AcCol>
        </AcRow>
    </div>
</template>
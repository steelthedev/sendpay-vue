<template>
    <section class="footer">
        <div class="container">
            <div class="row">
                <div class="col-md-4 col-lg-4">
                    <h6 class="mt-4">iPay</h6>
                </div>
                <div class="col-md-8 col-lg-8">
                    <p><router-link to="/" class="f-link">Home</router-link></p>
                    <p> <router-link to="/pay" class="f-link">Send funds</router-link></p>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    name:'Footer'
}
</script>
<style scoped>
.footer{
    background:var(--main-color);
    height: 100%;
    padding: 60px;
}

.footer h6{
    font-size: 1.6rem;
}

.f-link{
    padding: 3px;
    font-size: 1.3rem;
    color:#fff;
    text-decoration: none;
}
</style>
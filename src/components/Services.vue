<template>
    <section class="services">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-4 col-md-12 mt-4">
                    <div class="s-heading">
                        <h2>We render services digitally</h2>
                        <p>You can transfer funds to your loved ones using three channels</p>
                    </div>
                    <router-link :to="{name:'pay'}" class="btn h-btn btn-outline-white">Get started</router-link>
                </div>
                <div class="col-lg-8 col-md-12">
                    <div class="row justify-content-center">
                        <div class="col-lg-4 col-md-6 mt-2 ">
                            <div class="channel-card">
                        <h6>Pay with crypto</h6>
                        <p class="mt-4">You can trust us to process your crypto into a bank account.</p>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 mt-2">
                        <div class="channel-card">
                        <h6>Pay with card</h6>
                        <p class="mt-4">Payment via card can be processed efficiently with iPay.</p>
                            </div>
                        </div>

                          <div class="col-lg-4 col-md-6 mt-2">
                        <div class="channel-card">
                        <h6>Pay with card</h6>
                        <p class="mt-4">Payment via card can be processed efficiently with iPay.</p>
                            </div>
                        </div>
                          <div class="col-lg-4 col-md-6 mt-2">
                        <div class="channel-card">
                        <h6>Pay with card</h6>
                        <p class="mt-4">Payment via card can be processed efficiently with iPay.</p>
                            </div>
                        </div>
                        
                    </div>
                    
                </div>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    name:'Services',
}
</script>
<style scoped>

.h-btn{
    padding: 12px;
    background:var(--main-color);
    border-radius: 10px 10px ;
    font-size:1rem;
    font-weight: 700;
    color: #fff;
}

.services{
    padding: 40px;
}

.s-heading h2{
    font-size: 2.3rem;
    color: var(--main-color);
    font-weight: 700;
}


.s-heading p{
    font-size: 1.1rem;
    color: var(--secondary-color);
}
.channel-card{
    height: 200px;
    background: #eee;
    padding: 30px;
    width: 100%;
    border-radius: 10px;
}

.channel-card h6{
    font-size: 1.7rem;
    color: var(--main-color);
}

.channel-card p{
    font-size: 1rem;
    margin-top: 5px;
    color: var(--secondary-color);
}
</style>
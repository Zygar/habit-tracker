<template>
    <div class="habit-wrapper">
        <div class="habit-main-tile">
            <div class="habit-primary-data">
                <h2>{{title}}</h2>
                <div class="progress-bar">
                    {{actualPercentagePlaceholder }} / {{targetPercentage}}
                    <div class="target-percentage" :style="{ width: targetPercentage }"></div>
                    <div class="actual-percentage" :style="{ width: actualPercentagePlaceholder }"></div>
                </div>
            </div>    
            <div class="emoji-box">
                <i class="emoji">{{emoji}}</i>
            </div>
        </div>

        <div class="habit-expanded-tile  hidden"></div>

    </div>
</template>

<script>
export default {
    name: "habit",
    props: ["title", "emoji", "targetPercentage", "actualPercentagePlaceholder"]
}
</script>

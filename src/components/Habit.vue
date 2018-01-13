<template>
    <div class="habit-wrapper">
        <div class="habit-main-tile">
            <div class="habit-primary-data">
                <h2>{{title}}</h2>
                {{ percentageValues.target }}
                <div class="progress-bar">
                    {{percentageValues.actual}} / {{percentageValues.target}}
                    <div class="target-percentage" :style="{ width: percentageValues.target }"></div>
                    <div class="actual-percentage" :style="{ width: percentageValues.actual }"></div>
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
    props: ["title", "emoji", "targetPercentage", "actualPercentagePlaceholder"],
    computed:  {
        percentageValues: function() {
            return {
                target: (this.targetPercentage * 100) + "%",
                actual: (this.actualPercentagePlaceholder * 100) + "%"
            }
        }
    }
}
</script>

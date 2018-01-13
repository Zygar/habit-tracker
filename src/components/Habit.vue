<template>
    <div class="habit-wrapper" >
        <div class="habit-main-tile" @click="toggle()">
            <div class="habit-primary-data">
                <h2>{{title}}</h2>
                <div class="progress-bar"  :class="howWeTracking">
                    {{percentageValues.actual}} / {{percentageValues.target}}
                    <div class="target-percentage" :style="{ width: percentageValues.target }"></div>
                    <div class="actual-percentage" :style="{ width: percentageValues.actual }"></div>
                    <div class="percentage-overshoot" v-if="percentageValues.overcharge" :style="{ left: percentageValues.actual, width: percentageValues.overcharge}"></div>
                </div>
            </div>    
            <div class="emoji-box">
                <i class="emoji">{{emoji}}</i>
            </div>
        </div>

        <div class="habit-expanded-tile" :class="{hidden: !isSelected}">
            <p>You’re trying to do this <input class="input-percentage" type="number" v-model="targetPercentage" step="5"> of the time. That's about 5-6 days a week or ~25 days a month.</p>
        </div>

    </div>
</template>

<script>
export default {
    name: "habit",
    props: ["title", "emoji", "targetPercentage", "actualPercentagePlaceholder"],
    data () {
        let isSelected = false;
        return {isSelected}
    },
    methods: {
        toggle() {
            this.isSelected = !this.isSelected;
        }
    },
    computed:  {
        percentageValues () {
            let target, actual, overcharge;
            if (this.actualPercentagePlaceholder > this.targetPercentage) {
                target = (this.targetPercentage) + "%";
                actual = (this.targetPercentage) + "%";
                overcharge = ((this.actualPercentagePlaceholder - this.targetPercentage) ) + "%";
            } else {
                target = (this.targetPercentage) + "%";
                actual = (this.actualPercentagePlaceholder) + "%";
                overcharge = false;
            }
    
            return {
                target: target,
                actual: actual,
                overcharge: overcharge
            }
        },
        howWeTracking () {
            let difference = this.targetPercentage - this.actualPercentagePlaceholder;
            console.log(difference);
            if (difference > 20) {
                return "status-failing"
            } else if (difference > 0) {
                return "status-caution"
            } else if (difference == 0) {
                return "status-succeeding"
            } else if (difference < 0 ) {
                return "status-overachieving"
            }
            // if is positive and below 0.2, then yellow
            // else if positive then red
            // if 0, then green
            // if negative, we gotta separate them out
            //     and we figure out what to do with the overflow
        }
    }
}
</script>

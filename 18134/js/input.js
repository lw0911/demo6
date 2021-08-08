/**
 * Created by Administrator on 15-9-9.
 */
$(function() {
    $('.sinput ').bind({
        focus: function() {
            if (this.value == this.defaultValue) {
                this.value = "";
            }
        },
        blur: function() {
            if (this.value == "") {
                this.value = this.defaultValue;
            }
        }
    });
})
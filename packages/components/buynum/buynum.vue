<template>
  <!--数量-->
  <div class="item-cols-num clearfix">
    <div class="select">
      <span class="down"
            @click.stop.prevent="down()"
            :class="{'down-disabled':Num<=1}">-
      </span>
      <span class="num">
        <input type="text"
               :class="{show:show}"
               v-model="Num>=limit?limit:Num"
               @blur="blur()"
               maxlength="2">
                  <ul ref="ul">
                    <li v-for="i in numList" :key="i">{{i}}</li>
                  </ul>
      </span>
      <span class="up" :class="{'up-disabled':Num>=limit}"
            @click.stop.prevent="up()">+</span>
    </div>
  </div>
</template>
<script>
  export default {
    name:'BuyNum',
      
    props: {
      num: {
        type: [Number],
        default: 1
      },
      id: {
        type: [Number, String]
      },
      checked: {
        type: [String, Boolean]
      },
      limit: {
        type: Number,
        default: 10
      }
    },
    computed: {},
    data () {
      return {
        show: true,
        flag: true,
        Num: this.num,
        numList: []
      }
    },
    methods: {
      up () {
        if (this.flag && this.Num < this.limit) {
          this.ani('up')
        }
        console.log(this.Num)
        
        return false
      },
      down () {
        if (this.flag && this.Num > 1) {
          this.ani('down')
        }
        console.log(this.Num)
        
        return false
      },
      blur () {
        this.Num = this.Num > this.limit ? Number(this.limit) : Number(this.Num)
        this.$emit('edit-num', this.Num, this.id, this.checked)
      },
      ani (opera) {
        this.flag = false
        let n = this.Num
        this.numList = [n - 1, n, n + 1]
        let ul = this.$refs.ul
        let ulStyle = ul.style
        this.show = false
        ulStyle.zIndex = '99'
        ulStyle.transition = 'all .2s ease-out'
        if (opera === 'up') {
          this.Num++
          ulStyle.transform = 'translateY(-54px)'
        } else {
          this.Num--
          ulStyle.transform = `translateY(-18px)`
        }
        ul.addEventListener('transitionend', () => {
          this.show = true
          this.domInt(ulStyle)
          this.flag = true
        })
        ul.addEventListener('webkitAnimationEnd', () => {
          this.show = true
          this.domInt(ulStyle)
          this.flag = true
        })
        this.$emit('edit-num', this.Num, this.id, this.checked)
      },
      domInt (domStyle) {
        domStyle.zIndex = '1'
        domStyle.transition = 'all 0s'
        domStyle.transform = 'translateY(-36px)' // 回到原位
      }
    }
  }
</script>

  
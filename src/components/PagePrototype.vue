<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class PagePrototype extends Vue {
  private render: () => null

  private mounted() {
    console.log('PagePrototype mounted')
  }
}
</script>

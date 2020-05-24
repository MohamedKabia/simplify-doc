<template>
    <div>
       <div class="center-aside">
           <section>
               <div class="s-heading s-primary-text">Simplify classes</div>
               <div>
                   <p>Do more with simplify classes and create responsive, reusable components.
                            These classes make developing your app easier and also give you the ability to restructure any of our components to suit your design.
                            .</P>
               </div>
           </section>
            <section class="s-mt-20">
                <div id="position" class="s-primary-text">Position</div>
                <table class="s-table s-transparent">
                <tbody>
                    <tr class="s-theader s-bg-info s-light-text">
                        <th>Class</th>
                        <th>Description</th>
                        <th>Style</th>
                    </tr>
                    <tr>
                        <td class="s-danger-text">s-abs-top</td>
                        <td><small>set element position to absolute</small></td>
                        <td><small>position:absolutr;</small><br>
                        <small>top:0;</small> <br> <small>left:0;</small></td>
                    </tr>
                    <tr>
                        <td class="s-danger-text">s-abs-bottom</td>
                        <td><small>set element position to absolute</small></td>
                        <td><small>position:absolutr</small><br>
                        <small>bottom:0;</small> <br> <small>left:0;</small></td>
                    </tr>
                    <tr>
                        <td class="s-danger-text">s-rel</td>
                        <td>Set element position to relative</td>
                        <td><small>position:relative</small></td>
                    </tr>
                </tbody>
            </table>
            </section>

            <section class="s-mt-60">
                <div id="position" class="s-primary-text">Background-color</div>
                <p>Change background to desir color</p>
                <table class="s-table s-transparent">
                <tbody>
                    <tr class="s-theader s-bg-info s-light-text">
                        <th>Class</th>
                        <th>Description</th>
                        <th>Style</th>
                    </tr>
                    <tr>
                        <td class="s-danger-text">s-bg-primary</td>
                        <td class="s-bg-primary"><small>set element background color to primary</small></td>
                        <td><small>background:$primary;</small></td>
                    </tr>
                    <tr>
                        <td class="s-danger-text">s-bg-secondary</td>
                        <td class="s-bg-secondary"><small>set element background color to secondary</small></td>
                        <td><small>background:$secondary;</small></td>
                    </tr>
                    <tr>
                        <td class="s-danger-text">s-bg-info</td>
                        <td class="s-bg-info"><small>set element background color to info</small></td>
                        <td><small>background:$info;</small></td>
                    </tr>
                    <tr>
                        <td class="s-danger-text">s-bg-danger</td>
                        <td class="s-bg-danger"><small>set element background color to danger</small></td>
                        <td><small>background:$danger;</small></td>
                    </tr>
                    <tr>
                        <td class="s-danger-text">s-bg-dark</td>
                        <td class="s-bg-dark s-light-text"><small>set element background color to light</small></td>
                        <td><small>background:$light;</small></td>
                    </tr>
                    <tr>
                        <td class="s-danger-text">s-bg-light</td>
                        <td class="s-bg-light"><small>set element background color to light</small></td>
                        <td><small>background:$light;</small></td>
                    </tr>
                </tbody>
            </table>
                <div class="s-mt-20 s-mb-20">
                    <p>text color can be changed by adding any of the following classes</p>
                    <p>Note:  These colors can be changed. Learn how to on <nuxt-link to="/theme">theme</nuxt-link></p>
                    <ul class="s-card-1">
                        <li class="s-primary-text">s-primary-text</li>
                        <li class="s-secondary-text">s-secondary-text</li>
                        <li class="s-info-text"> s-info-text</li>
                        <li class="s-light-text s-bg-dark"> s-light-text</li>
                        <li class="s-danger-text"> s-danger-text</li>
                        <li class="s-warning-text">s-warning-text</li>
                    </ul>
                </div>
            </section>

            <section>
                <div class="s-primary-text">
                    Padding and Margin
                </div>
                <p>Padding and margin classes start from <span class="s-danger-text">1px</span> 
                to <span class="s-danger-text">20px</span></p>
                <table class="s-table s-transparent s-mt-20">
                <tbody>
                    <tr class="s-theader s-bg-info s-light-text">
                        <th>Class</th>
                        <th>Description</th>
                        <th>Style</th>
                    </tr>
                    <tr>
                        <td class="s-danger-text">s-m-1</td>
                        <td><small>Add margin of 1px on all sides</small></td>
                        <td><small>margin:1px;</small></td>
                    </tr>
                    <tr>
                        <td class="s-danger-text">s-ml-1</td>
                        <td><small>Add 1px margin on the left only</small></td>
                        <td><small>margin-left:1px;</small></td>
                    </tr>
                    <tr>
                        <td class="s-danger-text">s-mr-1</td>
                        <td><small>Add 1px margin on the right only</small></td>
                        <td><small>margin-right:1px;</small></td>
                    </tr>
                    <tr>
                        <td class="s-danger-text">s-mt-1</td>
                        <td><small>Add 1px margin on the top only</small></td>
                        <td><small>margin-top:1px;</small></td>
                    </tr>
                    <tr>
                        <td class="s-danger-text">s-mb-1</td>
                        <td><small>Add 1px margin on the bottom only</small></td>
                        <td><small>margin-bottom:1px;</small></td>
                    </tr>

                   
                    <tr>
                        <td class="s-danger-text">s-p-1</td>
                        <td><small>Add padding of 1px on all sides</small></td>
                        <td><small>margin:1px;</small></td>
                    </tr>
                    <tr>
                        <td class="s-danger-text">s-pl-1</td>
                        <td><small>Add 1px padding on the left </small></td>
                        <td><small>padding-left:1px;</small></td>
                    </tr>
                    <tr>
                        <td class="s-danger-text">s-pr-1</td>
                        <td><small>Add 1px padding on the right only</small></td>
                        <td><small>padding-right:1px;</small></td>
                    </tr>
                    <tr>
                        <td class="s-danger-text">s-pt-1</td>
                        <td><small>Add 1px padding on the top only</small></td>
                        <td><small>padding-top:1px;</small></td>
                    </tr>
                    <tr>
                        <td class="s-danger-text">s-pb-1</td>
                        <td><small>Add 1px padding on the bottom only</small></td>
                        <td><small>padding-bottom:1px;</small></td>
                    </tr>
                </tbody>
            </table>
            </section>

            <section class="s-mt-60 s-card-1" id="visibility">
                <div class="s-primary-text">Visibility</div>
                <table class="s-table s-transparent s-mt-20">
                <tbody>
                    <tr class="s-theader s-bg-info s-light-text">
                        <th>Class</th>
                        <th>Description</th>
                        <th>Style</th>
                    </tr>
                    <tr>
                        <td class="s-danger-text">s-node</td>
                        <td><small> hide element/set style todisplay none</small></td>
                        <td><small>hide on all device</small></td>
                    </tr>
                    <tr>
                        <td class="s-danger-text">s-sm-node</td>
                        <td><small>hide element from small devices-medium</small></td>
                        <td><small>0px - 768px</small></td>
                    </tr>
                    <tr>
                        <td class="s-danger-text">s-md-node</td>
                        <td><small>hide element from large upwords</small></td>
                        <td><small>768 -xl</small></td>
                    </tr>
                    <tr>
                        <td class="s-danger-text">s-lg-node</td>
                        <td><small>hide element from medium devices-extra large</small></td>
                        <td><small>768 -xl</small></td>
                    </tr>
                    <tr>
                        <td class="s-danger-text">.s-block</td>
                        <td><small>display block on all devices</small></td>
                        <td><small>display:block</small></td>
                    </tr>
                    <tr>
                        <td class="s-danger-text">.s-block</td>
                        <td><small>display block on all devices</small></td>
                        <td><small>display:block</small></td>
                    </tr>
                    <tr>
                        <td class="s-danger-text">.s-md-d-block</td>
                        <td><small>display block on large devices</small></td>
                        <td><small>992px </small></td>
                    </tr>
                </tbody>
                </table>
            </section>

            <section class="s-mt-60 s-card-1" id="Grid">
                <div class="s-primary-text">Grid classes</div>
                <table class="s-table s-transparent s-mt-20">
                <tbody>
                    <tr class="s-theader s-bg-info s-light-text">
                        <th>Class</th>
                        <th>Description</th>
                        <th>Style</th>
                    </tr>
                    <tr>
                        <td class="s-danger-text">s-d-flex</td>
                        <td><small> Set element to display flex</small></td>
                        <td><small>flex-direction: row</small></td>
                    </tr>
                    <tr>
                        <td class="s-danger-text">s-sm-d-flex</td>
                        <td><small> Set element to display flex on small devices</small></td>
                        <td><small>0px - 768px</small></td>
                    </tr>
                    <tr>
                        <td class="s-danger-text">s-md-d-flex</td>
                        <td><small>hide element from medium devices to large</small></td>
                        <td><small>768 -lg</small></td>
                    </tr>
                    <tr>
                        <td class="s-danger-text">s-lg-d-flex</td>
                        <td><small>hide element from large devices upwords</small></td>
                        <td><small>768 -lg</small></td>
                    </tr>
                    <tr>
                        <td class="s-danger-text">s-align-center</td>
                        <td><small>align flex element to center</small></td>
                        <td><small></small></td>
                    </tr>
                    <tr>
                        <td class="s-danger-text">s-center-all</td>
                        <td><small>align flex element to center and justify center</small></td>
                        <td><small></small></td>
                    </tr>
                     <tr>
                        <td class="s-danger-text">s-row-colum</td>
                        <td><small>display flex flex-direction column</small></td>
                        <td><small></small></td>
                    </tr>
                </tbody>
                </table>
            </section>
        </div> 
    </div>
</template>
<script>
export default {
     head () {
    return {
      title: 'Classes  ',
      meta: [
        { hid: 'description', name: 'description', content: 'Do more with  simplify classes ' }
      ]
    }
  }
}
</script>
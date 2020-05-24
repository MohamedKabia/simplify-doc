<template>
  <div>
    <div class="center-aside s-p-16">
      <div class="s-heading s-primary-text">
        S-dropdown
      </div>
      <section>
        <p>S-dropdown is a Simplify component that style group of order list or un order list to contextual
           overlays. This component is toggled by hovering. Like most Simplify components, no JavaScript is required for this component.
        </p>
        <p><span class="s-danger-text">S-dropdown</span> comes in three varieties, and their themes are fully customizable just like <span class="s-danger-text">s-toolbar.
</span>
        </p>
         <table class="s-table s-mt-60">
            <tbody>
            <tr>
                <th class="s-danger-text">s-dropdown</th>
                <th class="s-danger-text">s-dropdown d-top</th>
                <th class="s-danger-text">s-dropdown d-right</th>
            </tr>
            <tr>
                <td>
                    <small>
                        Position: absolute
                    </small>
                    <small><br>
                        top:40px
                        left: 0
                    </small>
                </td>
                <td>
                    <small>
                        Position: absolute
                    </small><br>
                    <small>
                        left: 0
                        top:0;
                        transform:translate(0, 100%)
                    </small>
                </td>
                <td>
                    <small>
                        Position: absolute
                    </small><br>
                    <small>
                        left: 100%;
                        transform:translate(0, -100%)
                    </small>
                </td>
            </tr>
            </tbody>
        </table>
      </section>
      <!----dropdown--->
      <section class="s-card s-mt-20">
          <div class="s-accordin">
            <div class="s-accord-item">
              <div class="s-accord-title">
                <div class="title">Html</div>
                <div class="s-icon"><span class="mdi mdi-code-tags"></span></div>
              </div>
              <div class="s-accord-content">
                <div class="code-editor">
                  <pre>
                <code  class="language-css">
&lt;div class=&quot;s-d-flex&quot;&gt;
  
  &lt;div class=&quot;s-dropdown s-m-5&quot;&gt;
    &lt;div class=&quot;s-ddown-title&quot;&gt;
      Fruits &lt;div class=&quot;s-icon&quot;&gt;&lt;span class=&quot;mdi mdi-chevron-down&quot;&gt;&lt;/span&gt;&lt;/div&gt;
    &lt;/div&gt;
    &lt;ul class=&quot;s-ddown-menu&quot;&gt;
      &lt;li class=&quot;s-ddown-item&quot;&gt;Banana&lt;/li&gt;
      &lt;li class=&quot;s-ddown-item&quot;&gt;Apple&lt;/li&gt;
      &lt;li class=&quot;s-ddown-item&quot;&gt;Mango&lt;/li&gt;
    &lt;/ul&gt;
  &lt;/div&gt;
  
  &lt;div class=&quot;s-dropdown d-right s-m-5&quot;&gt;
    &lt;div class=&quot;s-ddown-title&quot;&gt;
      Fruits &lt;div class=&quot;s-icon&quot;&gt;&lt;span class=&quot;mdi mdi-chevron-down&quot;&gt;&lt;/span&gt;&lt;/div&gt;
    &lt;/div&gt;
    &lt;ul class=&quot;s-ddown-menu&quot;&gt;
      &lt;li class=&quot;s-ddown-item&quot;&gt;Banana&lt;/li&gt;
      &lt;li class=&quot;s-ddown-item&quot;&gt;Apple&lt;/li&gt;
      &lt;li class=&quot;s-ddown-item&quot;&gt;Mango&lt;/li&gt;
    &lt;/ul&gt;
  &lt;/div&gt;

  &lt;div class=&quot;s-dropdown d-top s-m-5 s-bg-primary s-light-text&quot;&gt;
    &lt;div class=&quot;s-ddown-title&quot;&gt;
      Fruits &lt;div class=&quot;s-icon&quot;&gt;&lt;span class=&quot;mdi mdi-chevron-down&quot;&gt;&lt;/span&gt;&lt;/div&gt;
    &lt;/div&gt;
    &lt;ul class=&quot;s-ddown-menu&quot;&gt;
      &lt;li class=&quot;s-ddown-item&quot;&gt;Banana&lt;/li&gt;
      &lt;li class=&quot;s-ddown-item&quot;&gt;Apple&lt;/li&gt;
      &lt;li class=&quot;s-ddown-item&quot;&gt;Mango&lt;/li&gt;
      &lt;li class=&quot;s-ddown-item&quot;&gt;Orange&lt;/li&gt;
    &lt;/ul&gt;
  &lt;/div&gt;
  
&lt;/div&gt;
                </code>
                </pre>
                </div>
              </div>
            </div>
          </div>
          <!----end accordin--->
         <div class="s-row">
          <div class="s-dropdown s-m-5">
            <div class="s-ddown-title">
              Fruits <div class="s-icon"><span class="mdi mdi-chevron-down s-arrow"></span></div>
            </div>
            <ul class="s-ddown-menu">
              <li class="s-ddown-item">Banana</li>
              <li class="s-ddown-item">Apple</li>
              <li class="s-ddown-item">Mango</li>
            </ul>
          </div>
          <div class="s-dropdown d-right s-m-5">
            <div class="s-ddown-title">
              Fruits <div class="s-icon"><span class="mdi mdi-chevron-down"></span></div>
            </div>
            <ul class="s-ddown-menu">
              <li class="s-ddown-item">Banana</li>
              <li class="s-ddown-item">Apple</li>
              <li class="s-ddown-item">Mango</li>
            </ul>
          </div>

          <div class="s-dropdown d-top s-m-5 s-bg-primary s-light-text">
            <div class="s-ddown-title">
              Fruits <div class="s-icon"><span class="mdi mdi-chevron-down"></span></div>
            </div>
            <ul class="s-ddown-menu">
              <li class="s-ddown-item">Banana</li>
              <li class="s-ddown-item">Apple</li>
              <li class="s-ddown-item">Mango</li>
              <li class="s-ddown-item">Orange</li>
            </ul>
          </div>
        </div>
      </section>

      <section class="s-mt-20">
        <div class="s-card s-r-4">
          <div class="s-accordin">
            <div class="s-accord-item">
              <div class="s-accord-title">
                <div class="title">Html</div>
                <div class="s-icon"><span class="mdi mdi-code-tags"></span></div>
              </div>
              <div class="s-accord-content">
                <div class="code-editor">
                  <pre>
                <code  class="language-css">
&lt;div class=&quot;s-toolbar&quot;&gt;
  &lt;div class=&quot;s-icon&quot;&gt;&lt;span class=&quot;mdi mdi-menu&quot;&gt;&lt;/span&gt;&lt;/div&gt;
  &lt;div class=&quot;s-spacer&quot;&gt;&lt;/div&gt;
  &lt;div class=&quot;s-dropdown s-flat d-right&quot;&gt;
    &lt;div class=&quot;s-ddown-title&quot;&gt;
      &lt;div class=&quot;s-icon&quot;&gt;&lt;span class=&quot;mdi mdi-bell-outline &quot;&gt;&lt;/span&gt;&lt;/div&gt;
    &lt;/div&gt;
    &lt;ul class=&quot;s-ddown-menu&quot;&gt;
      &lt;li class=&quot;s-ddown-item&quot;&gt;
        &lt;div class=&quot;s-alert s-alert-outline-warning&quot;&gt;
          &lt;div class=&quot;s-alert-content&quot;&gt;
            &lt;div class=&quot;s-icon&quot;&gt;&lt;span class=&quot;mdi mdi-exclamation&quot;&gt;&lt;/span&gt;&lt;/div&gt;
            &lt;span class=&quot;s-fluid&quot;&gt;Please confirm your email&lt;/span&gt;
          &lt;/div&gt;
        &lt;/div&gt;
      &lt;/li&gt;
      &lt;li class=&quot;s-ddown-item&quot;&gt;Check out our new design&lt;/li&gt;
    &lt;/ul&gt;
  &lt;/div&gt;
&lt;/div&gt;
                </code>
                </pre>
                </div>
              </div>
            </div>
          </div>
          <!----end accordin--->
          <section class="s-mobile s-card">
          <div class="s-toolbar">
            <div class="s-icon"><span class="mdi mdi-menu"></span></div>
            <div class="s-spacer"></div>
            <div class="s-dropdown s-flat d-right">
              <div class="s-ddown-title">
                <div class="s-icon"><span class="mdi mdi-bell-outline "></span></div>
              </div>
              <ul class="s-ddown-menu">
                <li class="s-ddown-item">
                  <div class="s-alert s-alert-outline-warning">
                    <div class="s-alert-content">
                      <div class="s-icon"><span class="mdi mdi-exclamation"></span></div>
                      <span class="s-fluid">Please confirm your email</span>
                    </div>
                  </div>
                </li>
                <li class="s-ddown-item">Check out our new design</li>
              </ul>
            </div>
          </div>
          </section>

        </div>
      </section>
    </div>
  </div>
</template>
<script>
export default {
   head () {
    return {
      title: 'Dropdown ',
      meta: [
        { hid: 'description', name: 'description', content: 'Simplify Dropdown on hover or dropdown ' }
      ]
    }
  }
}
</script>
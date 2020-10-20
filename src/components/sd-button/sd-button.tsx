import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'sd-button',
  styleUrl: 'sd-button.css',
  shadow: true,
})
export class SButton {

  /**
   * The button size.
   * Possible values are: `"small"`, `"default"`, `"large"`.
   */
  @Prop({ reflect: true }) size?: 'small' | 'default' | 'large' = 'small';

  /**
   * The button type.
   * Possible values are: `"primary"`, `"secondary"`, `"disabled"`.
   */
  @Prop({ reflect: true }) type?: 'primary' | 'secondary' | 'disabled' = 'primary';

  render() {
    return (
      <Host>
        <button class={`button ${this.size} ${this.type} `}>
          <slot/>
        </button>
      </Host>
    );
  }

}

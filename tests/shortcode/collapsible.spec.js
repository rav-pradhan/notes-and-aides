const test = require('ava')
const collapsible = require('../../src/_includes/shortcodes/collapsible')

test('that collapsible is correctly rendered', t => {
    const heading = "Test Heading"
    const content = "This is a test heading"
    const result = collapsible(content, heading)
    
    const expected = `
<details class="collapsible">
<summary class="collapsible__summary">Test Heading</summary>
<div class="collapsible__text">This is a test heading</div>
</details>
`
    t.is(result, expected)
})
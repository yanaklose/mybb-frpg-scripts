# Add button to form

Mybb-type forums have a list of BB-buttons allowing users to use different tags to insert images, mark text as bold, etc. This function adds a button to a form, following the internal pattern of other buttons.

## Instruction

```js
addButtonToForm(name, title, nextSibling)
```

`name` is the part of an id that will be assigned to the created button, eg `roll`.

`title` is the value for title attribute, which will act as a hint when user hovers on the button, eg `Template for a dice roll`.

`nextSibling` is the button before which you'd like the created button to appear. Can be null, then the button is appended at the end of the list.

The script assumes that all buttons are in a container with an id `form-buttons`. It also assumes that buttons are all in the same `<tr>` in the same table (don't ask me why they did it that way).

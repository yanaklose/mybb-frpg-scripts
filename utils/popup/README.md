# Popup

Mybb-forums have no popups, so there is no infrastructure to handle them. These are two separate functions: one to open a popup, and one to close a popup.

## Instructions

```js
showPopup(popup);
```

The script assumes you use `popup` as the main CSS-class for your popups. It adds class `popup--show` to the popup container.

It also adds class `popup-open` on body to allow some popup-related styling (eg to prevent scroll on body when a popup is open).

```js
closeButton.addEventListener('click', hidePopup);
```

The script assumes you use `popup` as the main CSS-class for your popups. It removes class `popup--show` from the popup container.

It also removes class `popup-open` from body, and removes the listener from close button (it assumes your popup has one and it is the click target).


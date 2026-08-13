# Square Merch Integration Checklist

## Integration Approach

- [x] Keep the website static and hosted on GitHub Pages.
- [x] Use Square-hosted payment links for checkout.
- [x] Let Square handle payment details, taxes, fulfillment, and order records.
- [x] Never place Square passwords, access tokens, or private keys in the repository.
- [ ] Only consider the Web Payments SDK later if the site gains a secure backend.

## 1. Prepare The Square Catalogue

- [ ] Create one Square item for each shirt.
- [ ] Add the correct product name, description, image, and price.
- [ ] Add size variations such as S, M, L, and XL.
- [ ] Add SKUs and enable stock tracking where needed.
- [ ] Configure Canadian taxes and fulfillment options.
- [ ] Confirm whether each item supports shipping, pickup, or both.

## 2. Create The Checkout Links

- [ ] In Square Dashboard, create a "Sell an item" payment link for each shirt.
- [ ] Confirm the link uses the correct catalogue item and variations.
- [ ] Disable tipping unless it is intentionally required for merch orders.
- [ ] Set the post-checkout redirect to the website if desired.
- [ ] Copy and label each production `square.link` URL clearly.
- [ ] Test every link directly before adding it to the website.

## 3. Connect `merch.html`

- [ ] Replace every Shopify URL and Shopify-specific reference.
- [ ] Wrap each shirt image or visual in a link to its matching Square checkout.
- [ ] Point each product button to the same matching checkout link.
- [ ] Use clear CTA text such as "Choose Size & Buy."
- [ ] Open checkout in a new tab and include `rel="noopener noreferrer"`.
- [ ] Add an accessible label describing the shirt being purchased.
- [ ] Keep product names and displayed prices consistent with Square.

## 4. Interaction And Tracking

- [ ] Add a pointer cursor and visible hover state to clickable shirts.
- [ ] Add a clear keyboard focus state.
- [ ] Confirm the full clickable area does not create nested links.
- [ ] Track product-link clicks through the existing analytics hook if desired.
- [ ] Never send customer, card, or checkout details to site analytics.

## 5. Test Before Publishing

- [ ] Test every image link and button on desktop and mobile.
- [ ] Confirm the correct product and price open for every shirt.
- [ ] Confirm size selection and sold-out variations behave correctly.
- [ ] Verify shipping or pickup, taxes, email receipts, and order notifications.
- [ ] Complete one low-value production purchase and refund test if practical.
- [ ] Test cancellation and the post-checkout return path.
- [ ] Recheck all links after publishing to GitHub Pages.

## Integration Is Done When

- [ ] Every shirt visual and CTA opens the correct Square checkout.
- [ ] Fans can select an available size and complete a purchase on mobile or desktop.
- [ ] Square records the order and updates configured inventory.
- [ ] No secret Square credentials exist in the website code or Git history.
- [ ] Merch content no longer mentions or links to Shopify.

## Official References

- [Square Canada: Create and share payment links](https://squareup.com/help/ca/en/article/6692-get-started-with-square-checkout-links)
- [Square Checkout API overview](https://developer.squareup.com/docs/checkout-api)
- [Square Web Payments SDK requirements](https://developer.squareup.com/docs/web-payments/overview)

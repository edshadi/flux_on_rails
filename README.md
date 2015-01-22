# FluxOnRails
Generate basic React and Flux structure:
- **react.js file:** from Facebook
- **dispatcher.js file:** from Facebook
- **app/assets/components directory:** this is where you'll do all of your React component work with jsx
- **app/assets/javascripts/components directory:** transformed React components jsx => js
- **app/assets/javascripts/actions directory:** flux actions
- **app/assets/javascripts/dispatchers directory:** flux dispatchers
- **app/assets/javascripts/stores directory:** flux stores
- **app/assets/javascripts/constants directory:** flux constants
- **vendor/assets/javascripts/form-builder directory:** React plugin for building forms a la Rails. For documentation and useage: vendor/assets/javascripts/form-builder/README.md

## Installation

Add this line to your application's Gemfile:

```ruby
gem 'flux_on_rails', group: :development
```

And then execute:

    $ bundle

Or install it yourself as:

    $ gem install flux_on_rails

## Usage

```bash
# Generate sturcture and assets
rails g flux_on_rails:install

# Install npm react tools
npm install -g react-tools

# Watch and transform the jsx components (keep that runing)
rake react:watch

# Unfortunately, react tools npm tools adds trailing white space.
# Use this task to clean up before you stage your files.

rake react:clean
```

## Workflow

- watch your files with rake react:watch

- do your React work under assets/components with .jsx file extensions

- do your Flux work under assets/javascripts/actions assets/javascripts/constants assets/javascripts/stores assets/javascripts/dispatchers

- don't do any work under assets/javascripts/react this folder is constantly being built from assets/components

- use asset pipeline to your advantage. Use it to build modules that are aware of their own dependencies. Don't require directories, just files.

## Contributing

1. Fork it ( https://github.com/[my-github-username]/flux_on_rails/fork )
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create a new Pull Request

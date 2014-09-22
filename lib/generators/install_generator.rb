require 'rails/generators/base'
module FoR
  module Generators
    class InstallGenerator < Rails::Generators::Base
      source_root File.expand_path('../templates', __FILE__)
      desc "Adds ReactJS and base folder structure"
      def generate_assets
        js_manifest = 'app/assets/javascripts/application.js'
        if File.exist?(js_manifest)
          insert_into_file js_manifest, "//= require react", :after => "jquery_ujs\n"
        else
          copy_file "application.js", js_manifest
        end
        copy_file 'react.js', 'vendor/assets/javascripts/react.js'
      end
    end
  end
end

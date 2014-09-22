require 'rails/generators/base'
module FluxOnRails
  module Generators
    class InstallGenerator < Rails::Generators::Base
      source_root File.expand_path('../templates', __FILE__)
      desc "Adds ReactJS and base folder structure"

      def js_manifest
        @js_manifest ||= find_or_create_js_manifest
      end
      def generate_assets
        add_react
        add_react_form_builder
        add_flux_dispatcher
        add_flux_dirs
      end

      private
      def find_or_create_js_manifest
        manifest = 'app/assets/javascripts/application.js'
        copy_file("application.js", manifest) unless File.exist?(manifest)
        manifest
      end
      def add_react_form_builder
        insert_into_file js_manifest, "//= require form-builder/form-for.react", :after => "react\n"
        directory 'form-builder', 'vendor/assets/javascripts/form-builder'
      end
      def add_react
        insert_into_file js_manifest, "//= require react", :after => "jquery_ujs\n"
        copy_file 'react.js', 'vendor/assets/javascripts/react.js'
      end
      def add_flux_dispatcher
        insert_into_file js_manifest, "//= require dispatcher", :after => "react\n"
        copy_file 'dispatcher.js', 'vendor/assets/javascripts/dispatcher.js'
      end
      def add_flux_dirs
        directory 'components', 'app/assets/components'
        directory 'components', 'app/assets/javascripts/components'
        directory 'stores', 'app/assets/javascripts/stores'
        directory 'actions', 'app/assets/javascripts/actions'
        directory 'constants', 'app/assets/javascripts/constants'
        directory 'dispatchers', 'app/assets/javascripts/dispatchers'
      end
    end
  end
end

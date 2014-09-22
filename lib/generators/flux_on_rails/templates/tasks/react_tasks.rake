namespace :react do
  desc 'watch and jsx transform react components'
  task :build do
    exec 'jsx --watch app/assets/components app/assets/javascripts/'
  end
end

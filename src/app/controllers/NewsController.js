
class NewsController {

    index(req,res){
        res.render('news');
    }

    show(req,res){
        res.send('abcxyz!!!!');
    }

}

module.exports = new NewsController; 
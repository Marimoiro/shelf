# what is it

[COJT SW 5th](http://inf.tsukuba.ac.jp/ET-COJT/)�p�ɍ���������B

HTML5��WebGL����g���č쐬�����J�o���̏��i�J�^���O���ۂ����̂ł��B

# �t�@�C���\��

�����p�̃����Ȃ̂ŁA�K���ȏ�ɏ��������ł��B

* shelf.mxp ... �}�g���b�N�X�Ȃ�Ƃ��̃v���W�F�N�g�t�@�C���B�o�C�i���B
* Textures ... �e�X�N�`���Ɏg�������ȉ摜��K���ɒu���f�B���N�g���B
* shelf.webgl ... ��̃v���W�F�N�g����쐬����HTML5�p�̃����^�C���t�@�C���𐶐�����f�B���N�g���B
  * bootstrap ... bootstrap�p�̃f�B���N�g���B
  * images ... �摜��u���f�B���N�g���B
  * js ... JavaScript�p�̃f�B���N�g���B
    * matrixengine-controller-skeleton.js  ... MVC�ł���C�̕��������A�����������ꂽ�t�@�C���Ȃ̂Ŏg��Ȃ��B
    * controller.js ... ������������Ďg����悤�ɂ����t�@�C���B�ǂ����������������͌�q�B
    * model.js ... MVC��M�̕����B�قƂ�ǂ̕ύX�͂��̃t�@�C���BModel�N���X���`���Ă���B
    * ���̑���.js ... �v���W�F�N�g���������������t�@�C���Ȃ̂ŁA�����^�C������邽�тɏ㏑�������̂ŘM��Ȃ��B
  * index.html�@... ���C����HTML�t�@�C���B
  * sample.html ... �v���W�F�N�g���������������S�~�B��{�I�ɂ͎g��Ȃ��B

## controller.js �̍���

1. `cp matrixengine-controller-skeleton.js controller.js`
2. vim�ŁA`:%s/(\*\\\//(\*\//g` ������B
3. 1�s�ڂɁA`var model = new Model();` ��ǉ��B
4. �֐�`var MxeDefaultController = function(contents) {` �̍Ō�̍s�ɁA`model.init(contents); `�@��ǉ��B

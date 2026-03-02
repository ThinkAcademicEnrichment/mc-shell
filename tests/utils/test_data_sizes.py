import asyncio
from tests.config import *
from mcshell.constants import DATA_PATHS,RECIPE_BOOK_DATA_PATHS

# TODO: incorporate these tests
def test_async_data_size(player_name,**server_data):
    async def _test_data_size(print_values=False):
        _player = MCPlayer(player_name,**server_data)
        for _data_path in DATA_PATHS:
            try:
                _data = await _player.get_data_async(_data_path)
                # if print_values:
                print('-' * 20)
                print(_data_path)
                print(_data)
            except Exception as e:
                print(e)
                print(f"{_data_path} is too long")
                continue

        for _data_path in RECIPE_BOOK_DATA_PATHS:
            try:
                _data = await _player.get_data_async(f"recipeBook.{_data_path}")
                # if print_values:
                print('-' * 20)
                print(_data_path)
                print(_data)
            except Exception as e:
                print(e)
                print(f"{_data_path} is too long")
                continue

    asyncio.run(_test_data_size())

def test_data_size(player_name,**server_data):
    _player = MCPlayer(player_name,**server_data)
    for _data_path in DATA_PATHS:
        try:
            _data = _player.get_data(_data_path)
            # if print_values:
            print('-' * 20)
            print(_data_path)
            print(_data)
        except Exception as e:
            print(e)
            print(f"{_data_path} is too long")
            continue

    for _data_path in RECIPE_BOOK_DATA_PATHS:
        try:
            _data = _player.get_data(f"recipeBook.{_data_path}")
            # if print_values:
            print('-' * 20)
            print(_data_path)
            print(_data)
        except Exception as e:
            print(e)
            print(f"{_data_path} is too long")
            continue